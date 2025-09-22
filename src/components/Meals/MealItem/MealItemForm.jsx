import classes from './MealItemForm.module.css'
const MealItemForm = (props)=>{
return(
  <form className={classes.form}>
        <label className={classes.label} htmlFor='amount'>Amount</label>
        <input className={classes.amount}
         type="number"  id="amount" defaultValue='1'  min="1" max="5"/>
       <button className={classes.btn}>+ADD</button>
      </form>
);
};

export default MealItemForm;