import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path?: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (path) {
      if (router.pathname === '/' || router.pathname === path) {
        const element = document.getElementById(path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(path).then(() => {
          setTimeout(() => {
            const element = document.getElementById(path.replace('/', ''));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        });
      }
    } else {
      if (router.pathname !== '/') {
        router.push('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="navbar w-full bg-custom-color_2 text-white flex items-center justify-end p-5 md:p-7">
        <div className="hidden md:flex space-x-16 absolute left-1/2 transform -translate-x-1/2">
          <Link 
            href="/" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, '/about')}
          >
            About
          </Link>
          <Link 
            href="/resume" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, '/resume')}
          >
            Resume
          </Link>
          <Link 
            href="/project" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, '/project')}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-gray-300 transition duration-300"
            onClick={(e) => handleClick(e, '/contact')}
          >
            Contact
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-300 transition duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`navbar-mobile md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 text-center bg-custom-color_2 text-white">
          <Link 
            href="/"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e)}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, '/about')}
          >
            About
          </Link>
          <Link 
            href="/resume"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, '/resume')}
          >
            Resume
          </Link>
          <Link 
            href="/project"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, '/project')}
          >
            Projects
          </Link>
          <Link 
            href="/contact"
            className="hover:text-gray-300 transition duration-300 transform hover:translate-x-2"
            onClick={(e) => handleClick(e, '/contact')}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}