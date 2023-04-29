import '../styles/Details.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cross from '../images/x-mark.png';

const Details = () => {
  const { data, detailsId } = useSelector((store) => store.home);

  return (
    <div>
      <div className="cross-container">
        <Link to="/" className="cross-icon">
          <img src={cross} alt="cross" />
        </Link>
      </div>
      <div className="details-container">
        <h1>{data[detailsId].symbol}</h1>
        <h2>{data[detailsId].name}</h2>
        <h3>
          Price:
          {' '}
          {data[detailsId].price}
        </h3>
        <h3>
          Change:
          {' '}
          {data[detailsId].change}
        </h3>
        <h3>
          Changes Percentage:
          {' '}
          {data[detailsId].changesPercentage}
          %
        </h3>
      </div>
    </div>
  );
};

export default Details;
