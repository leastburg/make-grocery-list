//This is VERSION 1.0


//Ingredient Library
const ingredientsPickledBeetSalad = [
  ["1", "bag","mixed greens"], 
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
  ["1", "cups", "couscous"],
  ["2", "tbsp", "vegetable buillon"],
  ["2", "cups", "water or vegetable broth"],
  ["1", "tbsp", "cumin"],
  ["1", "tbsp", "paprika"],
  ["1", "pinch", "salt"],
  ["1", "pinch", "pepper"],
  ["0.5", "tbsp", "cayenne"],
  ["0.5", "cup", "lemon juice"],
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
  ["1", "bag", "mixed greens"], 
  ["2", "whole", "avocado"], 
  ["1", "bottle", "hoisin sauce"], 
  ["1", "bottle", "peanut sauce"]
];

const ingredientsBuffaloChickenSliders = [
  ["12", "full", "hawaiian rolls"],
  ["1", "lb", "breaded chicken tenders"],
  ["0.75", "cup", "buffalo wing sauce"],
  ["6", "slices", "provolone cheese"],
  [".25", "cup", "ranch dressing"],
  ["2", "tbsp", "butter"],
  ["2", "tbsp", "sesame seeds"]
]

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

function generateGroceryList(combinedRecipeLists) {
  let groceryList = [];
  combinedRecipeLists.forEach(function(ingredientList) {
    combineTwoIngredientArrays(ingredientList, groceryList);
  })
  return groceryList;
}

function matchInputsToIngredientLists(list) {
  let combinedRecipeLists = [];
  list.forEach(function(recipe) {
    if (recipe === "salad") {
      combinedRecipeLists.push(ingredientsPickledBeetSalad);
    } else if (recipe === "couscous") {
      combinedRecipeLists.push(ingredientsVeggieCousCous);
    } else if (recipe === "spring-rolls") {
      combinedRecipeLists.push(ingredientsVeggieSpringRolls);
    } else if (recipe === "chipotle-chicken") {
      combinedRecipeLists.push(ingredientsChipotleChickenMarinade);
    } else if (recipe === "buffalo-sliders") {
      combinedRecipeLists.push(ingredientsBuffaloChickenSliders);
    }
  });
  return combinedRecipeLists;
}

function displayGroceryList(array2D) {
  for(i=0; i < array2D.length; i++)
  $("ul#grocery-list").append("<li>" + array2D[i][0] + " " + array2D[i][1] + " " + array2D[i][2] + "</li>");
}

//This is user interface logic.//
$(document).ready(function() {

  let selectedRecipesFromInputs = [];
  $("form#select-recipes").submit(function(event) {
    event.preventDefault();
    $("ul#grocery-list").show();
    $("input:checkbox[name=recipe-options]:checked").each(function() {
      selectedRecipesFromInputs.push($(this).val());
      return selectedRecipesFromInputs;
    });

    let matchedListsFromInputs = matchInputsToIngredientLists(selectedRecipesFromInputs);
    let groceryList = generateGroceryList(matchedListsFromInputs);

    console.log(groceryList);
    displayGroceryList(groceryList);
    $('#select-recipes').hide();
  });

});