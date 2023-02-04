import './Header.css';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import FilmSwiper from '../FilmSwiper';
import { slides } from './slides';

function Header() {
  return (
    <header className="header">
      <Sidebar />
      <Navbar />
      <FilmSwiper slides={slides} isPagination={true} />
    </header>
  );
}

export default Header;
