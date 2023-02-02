import './Sidebar.css';

import logo from '../../assets/logo.png';
import homeIcon from '../../assets/home.png';
import movieIcon from '../../assets/movie.png';
import televisionIcon from '../../assets/tv.png';
import starIcon from '../../assets/star.png';

function Sidebar() {
  return (
    <aside className="header__sidebar">
      <nav className="nav sidebar__nav">
        <a href="/" className="link nav__link">
          <img src={logo} alt="Logo" />
        </a>
        <a href="/" className="link nav__link">
          <img src={homeIcon} alt="Home" />
        </a>
        <a href="#movie" className="link nav__link">
          <img src={movieIcon} alt="Movie" />
        </a>
        <a href="#television" className="link nav__link">
          <img src={televisionIcon} alt="Television" />
        </a>
        <a href="#star" className="link nav__link">
          <img src={starIcon} alt="Star" />
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
