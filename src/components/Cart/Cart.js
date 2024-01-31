/**
 * Redux import
 */
import { useSelector } from 'react-redux';
/**
 * Component import
 */
import Card from '../UI/Card';
import CartItem from './CartItem';
/**
 * Css import
 */
import classes from './Cart.module.css';

/**
 * Renders the shopping cart component.
 *
 * @param {Object} props - the props for the component
 * @return {JSX.Element} the rendered shopping cart component
 */
const Cart = (props) => {
  /*HOOKS */
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  /* RENDER */
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.length === 0 
            ? 
            <p>No items in cart.</p> 
          :
            cartItems.map(item => (
              <CartItem
                key={item.id}
                item={{
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                  id: item.id
                }}
              />
            ))
        }
        {
          cartItems.length > 0 && 
            <>
              <div className={classes.total}>
                <h3>TOTAL</h3>
                <h3>${totalAmount}</h3>
              </div>
              <div className={classes.order}>
                <button>Order</button>
              </div>
            </>
        }
      </ul>
    </Card>
  );
};

export default Cart;
