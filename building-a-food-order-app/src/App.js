import {Fragment, useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHanlder = () => {
    setCartIsShown(true);
  }

  const hideCartHanlder = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHanlder} /> }
      
      <Header 
        onShowCart={showCartHanlder}
        
      />
      <main>
        <Meals />
      </main>
      
      </CartProvider>
  );
}

export default App;
