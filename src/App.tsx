import React from 'react';

import { Globalstyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';





function App() {
  return (
    <Provider store={store}>
      <Header/>

      <ProductsList/>
      
      <Globalstyles/>
    </Provider>

  );
}

export default App;
