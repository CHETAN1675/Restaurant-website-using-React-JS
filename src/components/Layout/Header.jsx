import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";


const Header=()=>{
return(
    <Fragment >
        <header className={classes.header}>
       <h1>ReactMeals</h1>
       <button className={classes.btn}>Your Cart <span className="total-items">0</span></button>
       </header>
       <div className={classes['main-image']}>
<img src={mealsImage} alt='Food table' />
       </div>
    </Fragment>
);
};

export default Header