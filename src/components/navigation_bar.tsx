import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (router.pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    
    if (id) {
      router.push(`/${id}`, undefined, { shallow: true });
    } else {
      router.push('/', undefined, { shallow: true });
    }
  };

  return (
    <nav className="navbar bg-custom-color_2 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-end p-5 md:p-7">
        <div className="hidden md:flex space-x-16 absolute left-1/2 transform -translate-x-1/2">
          <a 
            href="/" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e)}
          >
            Home
          </a>
          <a 
            href="/about" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="/resume" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, 'resume')}
          >
            Resume
          </a>
          <a 
            href="/project" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, 'project')}
          >
            Projects
          </a>
          <a 
            href="/contact" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-300 transition duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`md:hidden bg-custom-color_3 absolute top-full left-0 w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          
          <a href="/"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e)}
          >
            Home
          </a>
          
          <a href="/about"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
          
          <a href="/project"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, 'projects')}
          >
            Projects
          </a>
          
          <a href="/contact"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}