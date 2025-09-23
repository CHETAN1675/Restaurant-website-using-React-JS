import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css"

const MealItem =(props)=>{
   const price = `$${props.price.toFixed(2)}`;
return(
    <li className={classes.mealLi}>
 <div>
<h2>{props.dish}</h2>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{price}</div>
</div>
<div><MealItemForm id={props.id} item={props}/></div>
    </li>
)
}
export default MealItem;