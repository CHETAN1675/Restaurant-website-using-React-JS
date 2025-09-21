import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import MealItems from "./MealItems";

const Meals= ()=> {
    return(
        <Fragment>
        <MealsSummary />
        <MealItems/>
        </Fragment>
    );
}
;
export default Meals;