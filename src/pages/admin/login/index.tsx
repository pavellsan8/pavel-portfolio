import { useState } from 'react';
import Head from "next/head";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      window.location.href = '/admin'; 
    } else {
      setError('Not Valid!');
    }
  };

  return (
    <>
      <Head>
        <title>Login Dashboard Contact Data</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-custom-color_1">
        <div className="w-full max-w-md bg-custom-color_2 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-custom-color_7 mb-3">Admin Dashboard</h2>
          <form onSubmit={handleSubmit} className="">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white text-black mt-5"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white text-black my-5"
            />
            {error && <p className="text-red-500 text-left">{error}</p>}
            <button
              type="submit"
              className="w-full bg-custom-color_5 hover:bg-custom-color_4 text-white font-semibold py-2 rounded-lg transition duration-200 mt-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
  
}
