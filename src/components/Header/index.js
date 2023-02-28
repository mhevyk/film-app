import './Header.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import BackdropSwiper from '../BackdropSwiper';
import { fetchHeaderSlides } from '../../utils';

function Header() {
  return (
    <header className="header">
      <Sidebar />
      <Navbar />
      <BackdropSwiper isAutoplay={true} fetchMethod={fetchHeaderSlides} />
    </header>
  );
}

export default Header;
