/**
 * Redux import
 */
import { useDispatch, useSelector } from 'react-redux';
/**
 * Component import
 */
import { uiActions } from '../../components/store/ui-slice';
/**
 * Css import
 */
import classes from './CartButton.module.css';

/**
 * Renders a cart button component.
 *
 * @param {Object} props - the properties for the component
 * @return {JSX.Element} the rendered button component
 */
const CartButton = (props) => {

  /* HOOKS */
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  /* FUNCTIONS */
  const handleTogglerCart = () =>{
    dispatch(uiActions.toggle())
  }

  /* RENDER */
  return (
    <button className={classes.button} onClick={handleTogglerCart}>
      <span>My Cart</span>
      <span className={classes.badge}> { totalQuantity } </span>
    </button>
  );
};

export default CartButton;
