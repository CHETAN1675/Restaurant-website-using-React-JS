import Card from "../UI/Card";
import styles from './Menu.module.css';
import MealItem from './MealItem/MealItem';

 const DUMMY_MEAL_ITEMS = [{id:1,dish:"Sushi" ,description:"Finest fish and veggies",price:22.99},
    {id:2,dish:"Schnitzel",description:"A German specialty!",price:16.50},
    {id:3,dish:"Barbecue Burger",description:"American, raw, meaty",price:12.99},
    {id:4,dish:"Green Bowl" ,description:"Healthy...and green...",price:15.60},
];

const Menu = ()=>{
const mealsList = DUMMY_MEAL_ITEMS.map((meal) => (
    
      <MealItem
      key = {meal.id} 
      id = {meal.id}
      dish = {meal.dish}
      description={meal.description}
      price = {meal.price}
      />
  ));
return(
    <section className={styles.meals}>
        <Card>
    <ul>{mealsList}</ul>
    </Card>
    </section>
);

};
export default Menu;