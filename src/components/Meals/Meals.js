import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AvailabaleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabaleMeals />
    </Fragment>
  );
};

export default Meals;
