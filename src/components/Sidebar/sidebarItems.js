import logo from '../../assets/logo.svg';
import homeIcon from '../../assets/home.svg';
import filmIcon from '../../assets/movie.svg';
import televisionIcon from '../../assets/tv.svg';
import starIcon from '../../assets/star-stroke.svg';

const sidebarItems = [
  {
    href: '/',
    image: logo,
    alt: 'Logo',
    classNames: 'logo',
  },
  {
    href: '/',
    image: homeIcon,
    alt: 'Home',
  },
  {
    href: '#movie',
    image: filmIcon,
    alt: 'Film',
  },
  {
    href: '#television',
    image: televisionIcon,
    alt: 'Television',
  },
  {
    href: '#star',
    image: starIcon,
    alt: 'Star',
  },
];

export default sidebarItems;
