import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/Store';
import Home from '../components/Home';
import Details from '../components/Details';

describe('Renders without crashing', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
