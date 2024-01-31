/**
 * Redux import
*/
import { useDispatch } from 'react-redux';
/**
 * Component import
*/
import { cartActions } from '../../components/store/cart-slice';
/**
 * Css import
*/
import classes from './CartItem.module.css';


/**
 * Renders a single item in the cart.
 *
 * @param {object} props - the properties for the cart item
 * @return {JSX.Element} the rendered cart item component
*/
const CartItem = (props) => {

  /* PROPS */
  const { id, title, quantity, total, price } = props.item;

  /* HOOKS */
  const dispatch = useDispatch();

  /* FUNCTIONS */

  /**
   * This function handles the deletion of a product.
   *
  */
  const handleDeleteProduct = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  /**
   * Handle adding a product to the cart.
   *
  */
  const handlerAddProduct = () => {
    const item = {
      id,
      title,
      price
    }
    dispatch(cartActions.addItemToCart(item));
  }


  /* RENDER */
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDeleteProduct}>-</button>
          <button onClick={handlerAddProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
