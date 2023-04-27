import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/home/homeSlice';
import '../styles/Home.css';
import enter from '../images/arrow-right.png';

const Home = () => {
  const {
    isPending, error, data,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1 className="header">
        Stock Prices
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="header-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>

      </h1>
      <div className="search-bar">
        <input type="text" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      {isPending && <p className="status">Loading...</p>}
      {error && <p className="status">{error}</p>}
      <div className="data">
        {data
        && data.map((item) => (
          <div key={Math.random()}>
            <Link className="enter-icon" to="details" details={item}>
              <img src={enter} alt="right arrow" />
            </Link>
            <p>{item.symbol}</p>
            <p>
              Price:&nbsp;
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
