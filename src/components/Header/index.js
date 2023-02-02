import './Header.css';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Swiper from '../Swiper';
import HeaderFilm from '../HeaderFilm';
import { slides } from './slides';

function Header() {
  return (
    <header className="header">
      <Navbar />
      <Swiper slides={slides} isPagination={true} SlideItem={HeaderFilm} />
      <Sidebar />
    </header>
  );
}

export default Header;
