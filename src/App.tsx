import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from 'components/Home/Home';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
