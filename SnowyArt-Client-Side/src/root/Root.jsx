import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../provider/Provider';
import Loding from '../pages/Loding/Loding';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Root = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Helmet>
        <title>Home | SnowyArt</title>
      </Helmet>
      <div
        className={
          scrolled
            ? 'fixed top-0 left-0 right-0 bg-[#0000006b] z-50 w-full mx-auto max-w-[1700px] text-white'
            : 'bg-transparent fixed top-0 left-0 right-0 z-50 w-full mx-auto max-w-[1700px]'
        }
      >
        <Nav />
      </div>
      <div className="max-w-[1700px] mx-auto overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
