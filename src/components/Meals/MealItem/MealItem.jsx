import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css"

const MealItem =(props)=>{
return(
    <li className={classes.mealLi}>
 <div>
<h2>{props.dish}</h2>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{props.price.toFixed(2)}</div>
</div>
<div><MealItemForm/></div>
    </li>
)
}
export default MealItem;