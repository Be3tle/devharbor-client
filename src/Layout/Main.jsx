import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes('login') ||
    location.pathname.includes('register');

  return (
    <div className="max-w-screen-2xl mx-auto">
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
