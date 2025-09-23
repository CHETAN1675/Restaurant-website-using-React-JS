import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props)=>{
    const cartCxt = useContext(CartContext);
    
let quantity = 0;
    cartCxt.items.forEach((item)=>{
        quantity = quantity + Number(item.quantity);
    });

    return(
<button className={classes.btn} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.totalItems}>{quantity}</span>
</button>
    )
};

export default HeaderCartButton;