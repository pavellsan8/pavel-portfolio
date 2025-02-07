import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>

        <div className="hidden md:flex space-x-16 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/#home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/#services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-700 absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/#home"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#services"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
