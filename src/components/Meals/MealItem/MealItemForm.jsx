import { useContext } from 'react';
import classes from './MealItemForm.module.css'
import CartContext from '../../../Store/Cart-Context';
const MealItemForm = (props)=>{
  const cartCxt = useContext(CartContext)

  const addItemToCart = (event)=>{
    event.preventDefault();

    const quantity= Number(document.getElementById("amount" + props.id).value);
    cartCxt.addItem({...props.item,quantity:quantity});
  };
return(
  <form className={classes.form}>
        <label className={classes.label} htmlFor={'amount_' + props.id}>Amount</label>
        <input className={classes.amount}
         type="number"  id="amount" defaultValue='1'  min="1" max="5"/>
       <button onClick={addItemToCart} className={classes.btn}>+ADD</button>
      </form>
);
};

export default MealItemForm;