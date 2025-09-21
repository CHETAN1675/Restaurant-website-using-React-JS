import styles from './MealItems.module.css';
const MealItems = ()=>{
const listOfMeals = [{id:1,dish:"Sushi" ,description:"Finest fish and veggies",price:22.99},
    {id:2,dish:"Schnitzel",description:"A German specialty!",price:16.50},
    {id:3,dish:"Barbecue Burger",description:"American, raw, meaty",price:12.99},
    {id:4,dish:"Green Bowl" ,description:"Healthy...and green...",price:15.60},
]

const mealsList = listOfMeals.map((meal) => (
    <li className= {styles.meal} key={meal.id}>
      <h3>{meal.dish}</h3>
      <p>{meal.description}</p>
      <p style={{ fontWeight: "bold" }}>${meal.price}</p>
    </li>
  ));
return(
    <section className={styles.meals}>
    <ul>{mealsList}</ul>
    </section>
);

};
export default MealItems;