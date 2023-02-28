import { Puff } from 'react-loading-icons';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <Puff stroke="white" strokeOpacity={0.125} />
    </div>
  );
}

export default Loader;
