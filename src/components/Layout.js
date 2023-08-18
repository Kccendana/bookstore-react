import { Outlet } from 'react-router-dom';
import Nav from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Nav />
    <Outlet />
  </div>
);

export default Layout;
