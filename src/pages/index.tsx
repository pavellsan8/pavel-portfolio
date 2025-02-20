import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from "../components/navigation_bar";
import Footer from "../components/footer";
import Homepage from "./homepage/homepage";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.slice(1);
    
    if (path) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.asPath]); 

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}