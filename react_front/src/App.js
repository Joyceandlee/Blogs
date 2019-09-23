import React from 'react';
import Home from './views/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
