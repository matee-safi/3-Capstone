import '../styles/Details.css';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchDetails } from '../redux/details/detailsSlice';
import { Link } from 'react-router-dom';
import cross from '../images/x-mark.png';

const Details = () => (
  <div>
    <div className="cross-container">
      <Link to="/" className="cross-icon">
        <img src={cross} alt="cross" />
      </Link>
    </div>
    <h1>Details</h1>

  </div>
);

export default Details;
