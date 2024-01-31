/**
 * React import
 */
import React from 'react';
/**
 * React Redux
 */
import { useSelector } from 'react-redux';
/**
 * Component import
 */
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

/**
 * Function representing the main application component.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
function App() {

  /* HOOKS */
  const showCart = useSelector(state => state.ui.isCartVisible);

  /* RENDER */
  return (
      <Layout>
        {
          showCart && <Cart />
        }
        <Products />
      </Layout>
  );
}

export default App;
