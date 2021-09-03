import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items=useSelector(state=>state)
  console.log(items.cart)
  const toggleCartHandler=()=>{
      dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
