
//Ingredient Library
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

//This is utility logic.//

//This is business logic.//


function addUnlikeItems(array, destinationArray) {
	let comparisonArray = [];
  let duplicateIndexesOfArray = [];
	for (let i=0; i < destinationArray.length; i++) {
  	comparisonArray.push(destinationArray[i][2]);
    }
  for (let i=0; i < array.length; i++) {
  	if (comparisonArray.includes(array[i][2])) {
    	console.log(i);
      duplicateIndexesOfArray.push(i);
      console.log(duplicateIndexesOfArray);
    } else {
      destinationArray.push(array[i]);
    }
	}
  console.log(destinationArray);
  return(destinationArray);
}


function addLikeItems(array, destinationArray) {
	for (let i=0; i < array.length; i++) {
  	let finalMeasurement;
    const fullIngredientData = array[i]
  	const ingredient = array[i][2];
    const ingredientMeasurement = parseInt(array[i][0]);
  for (let i=0; i < destinationArray.length; i++) {
    let listedIngredient = destinationArray[i][2];
    if (ingredient === listedIngredient) {
      console.log(ingredient, listedIngredient);
      const listedIngredientMeasurement = parseInt(destinationArray[i][0]);
      finalMeasurement = (ingredientMeasurement + listedIngredientMeasurement).toString();
   		destinationArray[i].splice(0, 1, finalMeasurement);
    } 
  }
  console.log(destinationArray);
  }
  return destinationArray;
}

function combineTwoArrays(array, destinationArray) {
	const newArray = addLikeItems(array, destinationArray);
  const ultimateArray = addUnlikeItems(array, newArray);
  console.log(ultimateArray);
  return ultimateArray;
}

const groceryList = combineTwoArrays(recipe1, recipe2);
console.log(groceryList);
   





//THIS IS THE OLD CODE

// function displayIngredients(list) {
//   let combinedIngredientsList = [];
//   list.forEach(function(recipe) {
//     if (recipe === "spring-rolls") {
//       combineIdenticalInstances(ingredientsVeggieSpringRolls, combinedIngredientsList);
//     } else if (recipe === "salad") {
//       combineIdenticalInstances(ingredientsPickledBeetSalad, combinedIngredientsList);
//     }
//     return combinedIngredientsList;
//   });
//   console.log(combinedIngredientsList);
// }

// function combineIdenticalInstances(array, destinationArray) {
//   for (let i=0; i < array.length; i++) {
//     if (!destinationArray.includes(array[i])) {
// 			destinationArray.push(array[i]);
//     }
//   }
//   console.log(destinationArray);
// }

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
