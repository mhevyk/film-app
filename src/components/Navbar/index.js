import './Navbar.css';
import navbarItems from './navbarItems';
import NavbarMenu from '../NavbarMenu';

function Navbar() {
  return <NavbarMenu items={navbarItems} className="nav header__nav" />;
}

export default Navbar;
