import '../styles/Details.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cross from '../images/x-mark.png';

const Details = () => {
  const { id } = useParams();
  const numberId = Number(id);
  const { data } = useSelector((store) => store.home);
  const details = data[numberId];
  console.log(details);

  return (
    <div>
      <div className="cross-container">
        <Link to="/" className="cross-icon">
          <img src={cross} alt="cross" />
        </Link>
      </div>
      <h1>Details</h1>
      {/* <h2>{details.name}</h2> */}
    </div>
  );
};

export default Details;
