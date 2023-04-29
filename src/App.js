import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:symbol" element={<Details />} />
    </Routes>
  );
}

export default App;
