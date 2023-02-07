import './Header.css';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { slides } from './slides';
import FadeSwiper from '../FadeSwiper';

function Header() {
  return (
    <header className="header">
      <Sidebar />
      <Navbar />
      <FadeSwiper slides={slides} isAutoplay={true} />
    </header>
  );
}

export default Header;
