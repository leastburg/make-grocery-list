
//Ingredient Library
const ingredientsPickledBeetSalad = [
  ["1", "box","mixed greens"], 
  ["1", "jar", "pickled beets"], 
  ["1", "log", "goat cheese"], 
  ["1", "jar", "sundried tomatoes"], 
  ["1", "whole", "red onion"], 
  ["1", "whole", "avocado"], 
  ["2", "tbsp", "olive oil"], 
  ["2", "tbsp", "balsamic vinegar"], 
  ["1", "whole", "cucumber"]
];

const ingredientsVeggieCousCous = [
  ["2", "tbsp", "olive oil"],
  ["2", "cups", "couscous"],
  ["2", "tbsp", "vegetable buillon"],
  ["2", "cups", "water or vegetable broth"],
  ["1", "tbsp", "cumin"],
  ["1", "tbsp", "paprika"],
  ["1", "pinch", "salt"],
  ["1", "pinch", "pepper"],
  ["0.5", "tbsp", "cayenne"],
  ["1", "cup", "lemon juice"],
  ["1", "whole", "onion"],
  ["1", "whole", "eggplant"],
  ["2", "whole", "zuchini"],
  ["2", "whole", "squash"],
  ["1", "cup", "cherry tomato"],
  ["6", "cloves", "garlic"],
];

const ingredientsVeggieSpringRolls = [
  ["1", "box", "rice paper"], 
  ["1", "pack", "rice noodles"], 
  ["2", "whole", "cucumber"], 
  ["2", "whole", "carrot"], 
  ["2", "box", "mixed greens"], 
  ["3", "whole", "avocado"], 
  ["1", "bottle", "hoisin sauce"], 
  ["1", "bottle", "peanut sauce"]
];

const ingredientsChipotleChickenMarinade = [
  ["1", "tsp", "cumin powder"],
  ["1", "tsp", "dried oregano"],
  ["1", "tsp", "black pepper"],
  ["2", "tsp", "kosher salt"],
  ["1", "tbsp", "chili powder"],
  ["2", "tbsp", "olive oil"],
  ["4", "cloves", "garlic"],
  ["7", "oz", "chipotle peppers in adobo sauce"],
  [".75", "cup", "water"],
  ["10", "boneless filets", "chicken"]
]

const ingredientsBuffaloChickenSliders = [
  ["12", "full", "hawaiian rolls"],
  ["1", "lb", "breaded chicken tenders"],
  ["0.75", "cup", "buffalo wing sauce"],
  ["6", "slices", "provolone cheese"],
  [".25", "cup", "ranch dressing"],
  ["2", "tbsp", "butter"],
  ["2", "tbsp", "sesame seeds"]
]

//This is utility logic.//

//This is business logic.//

function addUniqueIngredients(array, destinationArray) {
	let comparisonArray = [];
	for (let i=0; i < destinationArray.length; i++) {
  	comparisonArray.push(destinationArray[i][2]);
  }
  for (let i=0; i < array.length; i++) {
  	if (!comparisonArray.includes(array[i][2])) {
    	destinationArray.push(array[i]);
    }
	}
  return(destinationArray);
}


function combineSameIngredients(array, destinationArray) {
	for (let i=0; i < array.length; i++) {
  	let finalMeasurement;
  	const ingredient = array[i][2];
    const ingredientMeasurement = parseInt(array[i][0]);
    for (let i=0; i < destinationArray.length; i++) {
      let destinationIngredient = destinationArray[i][2];
      if (ingredient === destinationIngredient) {
        const destinationIngredientMeasurement = parseInt(destinationArray[i][0]);
        finalMeasurement = (ingredientMeasurement + destinationIngredientMeasurement).toString();
   		  destinationArray[i].splice(0, 1, finalMeasurement);
      } 
    }
  }
  return destinationArray;
}

function combineTwoIngredientArrays(array, destinationArray) {
	const initiateCombination = combineSameIngredients(array, destinationArray);
  const finishedCombination = addUniqueIngredients(array, initiateCombination);
  return finishedCombination;
}

// const groceryList = combineTwoIngredientArrays(recipe1, recipe2);
// console.log(groceryList);



function generateGroceryList(array) {
  let groceryList = [];
  array.forEach(function(recipeList) {
    combineTwoIngredientArrays(recipeList, groceryList);
  })
  return groceryList;
}

function matchInputsToIngredientLists(list) {
  let combinedIngredientLists = [];
  list.forEach(function(recipe) {
    if (recipe === "salad") {
      combinedIngredientsLists.push(ingredientsPickledBeetSalad);
    } else if (recipe === "spring-rolls") {
      combinedIngredientLists.push(ingredientsVeggieSpringRolls);
    }
  })
}

//THIS IS THE OLD CODE

function displayIngredients(list) {
  let combinedIngredientsList = [];
  list.forEach(function(recipe) {
    if (recipe === "spring-rolls") {
      combineIdenticalInstances(ingredientsVeggieSpringRolls, combinedIngredientsList);
    } else if (recipe === "salad") {
      combineIdenticalInstances(ingredientsPickledBeetSalad, combinedIngredientsList);
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
