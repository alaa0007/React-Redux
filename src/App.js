/**
 * React import
 */
import React, { useEffect } from 'react';
/**
 * React Redux
 */
import { useSelector, useDispatch } from 'react-redux';
/**
 * Component import
 */
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './components/store/cart-actions';

let isInitial = true;

/**
 * Function representing the main application component.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
function App() {

  /* HOOKS */
  const showCart = useSelector(state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notifications);


  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  /* RENDER */
  return (
    <>
      {
        notification && 
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
      }
      <Layout>
        {
          showCart && <Cart />
        }
        <Products />
      </Layout>
    </>
  );
}

export default App;
