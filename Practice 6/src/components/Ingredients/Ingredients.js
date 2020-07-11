import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ingredient },
    ]);
  };
  const removeIngredienbtHandler = (ingredientID) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientID)
    );
  };

  const [userIngredients, setUserIngredients] = useState([]);
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredienbtHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
