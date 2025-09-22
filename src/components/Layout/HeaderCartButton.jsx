import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ()=>{
    return(
<button className={classes.btn}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.totalItems}>0</span>
</button>
    )
};

export default HeaderCartButton;