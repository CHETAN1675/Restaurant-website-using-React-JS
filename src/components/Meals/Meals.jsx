import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import Menu from "./Menu";

const Meals= ()=> {
    return(
        <Fragment>
        <MealsSummary />
        <Menu/>
        </Fragment>
    );
};

export default Meals;