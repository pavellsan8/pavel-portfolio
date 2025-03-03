import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { LogOut } from "lucide-react";

import { db } from "../../config/firebase/firebase";

interface ContactData {
  id: string;
  name?: string;
  email?: string;
  message?: string;
  createdAt?: any; 
  [key: string]: any; 
}

export default function AdminPage() {
  const [data, setData] = useState<ContactData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<string | null>("created_at"); 
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc'); 
  const [currentTime, setCurrentTime] = useState<string>("");
  
  useEffect(() => {
    setCurrentTime(new Date().toISOString());
      
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "contact"));
          const items: ContactData[] = [];
          querySnapshot.forEach((doc) => {
            items.push({ 
              id: doc.id, 
              ...doc.data() as Omit<ContactData, 'id'>
            });
          });
          setData(items);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data: ", error);
          setLoading(false);
        }
      };
  
      fetchData();
  }, []);
  
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const filteredData = data.filter(item => 
    Object.values(item).some(
      value => 
        value !== null && 
        value !== undefined && 
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
      
    const aValue = a[sortField];
    const bValue = b[sortField];
      
    if (aValue === bValue) return 0;
    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;
      
    if (sortField === 'created_at') {
      let aDate, bDate;
        
    if (aValue && typeof aValue === 'object' && aValue.toDate) {
      aDate = aValue.toDate();
    } else {
      aDate = new Date(aValue);
    }
        
    if (bValue && typeof bValue === 'object' && bValue.toDate) {
      bDate = bValue.toDate();
    } else {
      bDate = new Date(bValue);
    }
        
    return sortDirection === 'asc' 
      ? aDate.getTime() - bDate.getTime() 
      : bDate.getTime() - aDate.getTime();
    }
      
    const comparison = String(aValue).localeCompare(String(bValue));
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  const formatValue = (value: any, fieldName: string): string => {
    if (value === null || value === undefined) return '';
    
    switch(fieldName) {
    case 'email':
      return String(value);
    case 'created_at':
      let date;
      if (value && typeof value === 'object' && value.toDate) {
        date = value.toDate();
      } else {
        date = new Date(value);
      }
        
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    case 'message':
      const messageStr = String(value);
      return messageStr.length > 50 ? `${messageStr.substring(0, 47)}...` : messageStr;
    default:
      if (typeof value === 'object') {
        if (value instanceof Date) {
          return value.toISOString().replace('T', ' ').substring(0, 19);
        }
        return JSON.stringify(value);
      }
      return String(value);
    }
  };

  const formatDate = (isoString: string): string => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  };

  const getFieldLabel = (fieldName: string): string => {
    if (fieldName === 'created_at') return 'Created At';
    
    return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
  };

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      window.location.href = '/admin/login'; 
    } else {
      alert('Logout gagal!');
    }
  };

  return (
    <div className="min-h-screen bg-custom-color_1 p-5">
      <Head>
        <title>Dashboard Contact Data</title>
      </Head>
      
      <div className="p-2 mx-auto">
        <div className="bg-custom-color_3 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-custom-color_6 mb-3">Contact Management</h1>
              <p className="text-white">View and manage all contact submissions</p>
            </div>
            <button
                type="submit"
                className="flex items-center gap-3 bg-custom-color_5 hover:bg-custom-color_4 text-white py-2 px-5 rounded-lg transition duration-200"
                onClick={handleLogout}
            >
              <span className="hidden sm:block">Logout</span>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-5"> 
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center flex-1 md:flex-none mb-4">
              <div className="bg-custom-color_5 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-blue-800 text-sm font-medium">Total Contacts</p>
                <h2 className="text-2xl font-bold text-blue-900">{data.length}</h2>
              </div>
            </div>
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              {data.length > 0 ? (
                <table className="min-w-full divide-y divide-custom-color_4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-custom-color_2 uppercase tracking-wider">
                        No
                      </th>
                      {['name', 'email', 'subject', 'message', 'createdAt'].map(key => {
                        if (!data.some(item => key in item)) return null;
                        
                        return (
                          <th 
                            key={key} 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-custom-color_2 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSort(key)}
                          >
                            <div className="flex items-center">
                              {getFieldLabel(key)}
                              {sortField === key && (
                                <span className="ml-1">
                                  {sortDirection === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </div>
                          </th>
                        );
                      })}
                      
                      {data.length > 0 && 
                        Object.keys(data[0])
                          .filter(key => !['id', 'name', 'email', 'subject', 'message', 'createdAt'].includes(key))
                          .map(key => (
                            <th 
                              key={key} 
                              scope="col" 
                              className="px-6 py-3 text-left text-xs font-medium text-custom-color_2 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                              onClick={() => handleSort(key)}
                            >
                              <div className="flex items-center">
                                {getFieldLabel(key)}
                                {sortField === key && (
                                  <span className="ml-1">
                                    {sortDirection === 'asc' ? '↑' : '↓'}
                                  </span>
                                )}
                              </div>
                            </th>
                          ))
                      }
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedData.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-custom-color_2 text-left">
                          {index + 1}
                        </td>

                        {['name', 'email', 'subject', 'message', 'createdAt'].map(key => {
                          if (!data.some(item => key in item)) return null;
                          
                          return (
                            <td key={`${item.id}-${key}`} className={`px-6 py-4 text-sm ${key === 'email' ? 'text-blue-600' : 'text-custom-color_2'}`}>
                              {key in item ? formatValue(item[key], key) : '-'}
                            </td>
                          );
                        })}
                        
                        {Object.keys(data[0])
                          .filter(key => !['id', 'name', 'email', 'subject', 'message', 'createdAt'].includes(key))
                          .map(key => (
                            <td key={`${item.id}-${key}`} className="px-6 py-4 text-sm text-custom-color_2">
                              {key in item ? formatValue(item[key], key) : '-'}
                            </td>
                          ))
                        }
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-custom-color_2">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-lg font-medium">No data available</p>
                  <p className="text-sm">Contact submissions will appear here</p>
                </div>
              )}
            </div>
          )}
          
          {data.length > 0 && sortedData.length === 0 && (
            <div className="mt-6 text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No matches found for "{searchTerm}"</p>
            </div>
          )}
          
          <div className="mt-4 text-sm text-custom-color_7 text-right">
            {currentTime && (
              <>Last updated: {formatDate(currentTime)}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}