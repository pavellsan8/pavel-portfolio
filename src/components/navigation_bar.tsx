import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, path?: string) => void;
}

const NavItem = ({ href, label, isMobile, onClick }: NavItemProps) => (
  <Link 
    href={href}
    className={`hover:text-gray-300 transition duration-300 ${
      isMobile ? "transform hover:translate-x-2" : ""
    }`}
    onClick={(e) => onClick(e, href === "/" ? undefined : href)}
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    // { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skill", label: "Skill" },
    { href: "/resume", label: "Resume" },
    { href: "/project", label: "Project" },
    { href: "/contact", label: "Contact" }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path?: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (path) {
      if (router.pathname === '/' || router.pathname === path) {
        const element = document.getElementById(path.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(path).then(() => {
          setTimeout(() => {
            const element = document.getElementById(path.replace('/', ''));
            element?.scrollIntoView({ behavior: 'smooth' });
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
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={handleClick}
            />
          ))}
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-300 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="navbar-mobile flex flex-col p-4 space-y-4 text-center bg-custom-color_2 text-white">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              isMobile
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}