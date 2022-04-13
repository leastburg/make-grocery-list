
//Ingredient Library
const ingredientsVeggieSpringRolls = ["rice paper", "rice noodles", "cucumber", "carrot", "mixed greens", "avocado", "hoisin sauce", "peanut sauce"];
const ingredientsPickledBeetSalad =  ["mixed greens", "pickled beets", "goat cheese", "sundried tomatoes", "red onion", "avocado", "olive oil", "balsamic vinegar", "cucumber"];

//This is utility logic.//

//This is business logic.//
function displayIngredients(list) {
  let combinedIngredientsList = [];
  list.forEach(function(recipe) {
    if (recipe === "spring-rolls") {
      combinedIngredientsList = combinedIngredientsList.concat(ingredientsVeggieSpringRolls);
    } else if (recipe === "salad") {
      combinedIngredientsList = combinedIngredientsList.concat(ingredientsPickledBeetSalad);
    }
    return combinedIngredientsList;
  });
  console.log(combinedIngredientsList);
}


//This is user interface logic.//
$(document).ready(function() {

  let recipeListArray = [];
  
  $("form#select-recipes").submit(function(event) {
    event.preventDefault();
    $("#grocery-list").show();
    $("input:checkbox[name=recipe-options]:checked").each(function() {
      recipeListArray.push($(this).val());

      // const groceryList = $(this).val();
      // console.log(groceryList);

      // displayIngredients(groceryList);
      // $('#grocery-list').append(groceryList + "<br>");
    });
    console.log(recipeListArray);
    displayIngredients(recipeListArray);
    $('#select-recipes').hide();
  });

});
