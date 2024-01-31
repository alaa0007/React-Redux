/**
 * Redux import
 */
import { useDispatch } from 'react-redux';
/**
 * Component import
*/
import Card from '../UI/Card';
import { cartActions } from '../../components/store/cart-slice';
/**
 * Css import
 */
import classes from './ProductItem.module.css';



/**
 * Renders a product item with title, price, and description.
 *
 * @param {Object} props - The properties object containing title, price, and description.
 * @return {JSX.Element} The rendered product item component.
*/
const ProductItem = (props) => {
  /* PROPS*/
  const { id, title, price, description } = props.item;
  
  /* HOOKS */
  const dispatch = useDispatch();


  /**
   * Handles adding an item to the cart.
   *
   * @param {void} 
   * @return {void} 
  */
  const addToCartHandler = () => {
    const item = {
      id: id,
      title: title,
      price: price,
      quantity: 1,
      description: description
    }
    dispatch(cartActions.addItemToCart(item));
  } 


  /* RENDER */
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
