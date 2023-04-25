import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/home/homeSlice';

const Home = () => {
  const { isPending, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
