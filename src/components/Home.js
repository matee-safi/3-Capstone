import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getId, setSearch } from '../redux/home/homeSlice';
import '../styles/Home.css';
import enter from '../images/arrow-right.png';

const Home = () => {
  const {
    isPending, error, data,
  } = useSelector((state) => state.home);
  const { search } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(setSearch(''));
  }, [dispatch]);

  const handleGetId = (id) => {
    dispatch(getId(id));
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div>
      <h1 className="header">
        Stock Prices
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="header-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>

      </h1>
      <div className="search-bar">
        <input type="text" onChange={(e) => handleSearch(e)} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      {isPending && (
      <div className="spinner status">
        <div className="cube1" />
        <div className="cube2" />
      </div>
      )}
      {error && <p className="status">{error}</p>}
      <div className="data">
        {data
        && data.filter((recipe) => (search.toLowerCase() === '' ? recipe : recipe.symbol.toLowerCase().includes(search))).map((item) => (
          <div key={item.id}>
            <Link className="enter-icon" to={`details/${item.symbol}`} onClick={() => handleGetId(item.id)}>
              <img src={enter} alt="right arrow" />
            </Link>
            <p className="symbol">{item.symbol}</p>
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
