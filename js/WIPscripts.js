const ingredientsVeggieSpringRolls = ["rice paper", "rice noodles", "1lb cucumber", "carrot", "mixed greens", "avocado", "cucumber straws", "hoisin sauce", "peanut sauce"];
const ingredientsPickledBeetSalad =  ["mixed greens", "pickled beets", "goat cheese", "sundried tomatoes", "red onion", "avocado", "olive oil", "balsamic vinegar", "2lb cucumber"];

/* let regex = /element[i]/gi */


function combineIdenticalInstances(array, destinationArray) {
  for (let i=0; i < array.length; i++) {
  	let word = array[i]
  	console.log(word + " is the word at " + i);
  	let matchesExistAt = [];
   	for(let i=0; i < destinationArray.length; i++) {
    	const regexCucumber = new RegExp(destinationArray[i]);
 			if (regexCucumber.test(word)) {
      	console.log(true);
      	console.log(i);
      }   
		}
		/* let regex = new regex "/[" + array[i] + "]/gi" */
/*  const regex = new RegExp();
    if (!destinationArray.includes(array[i])) {
          destinationArray.push(array[i]);
    } */
  }
   /*    console.log(destinationArray); */
}

combineIdenticalInstances(ingredientsVeggieSpringRolls, ingredientsPickledBeetSalad);

/* function testRegex(array) {
  for (let i=0; i < array.length; i++) {
    const regex = new RegExp(/cucumber/gi);
    if (regex.test(array[i])) {
      console.log(i);
    }
  }
}

testRegex(ingredientsVeggieSpringRolls); */


/* const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true */





//thursday


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

/* console.log(ingredientsVeggieSpringRolls[0]);
console.log(ingredientsVeggieSpringRolls[0][0]);
console.log(ingredientsVeggieSpringRolls[0][1]); */
/* ingredientsVeggieSpringRolls.forEach((ingredient) => {
   ingredient.forEach((ingredientData) => {
        console.log(ingredientData);
    });
}); */

function doesItInclude(array, destinationArray) {
	for (let i=0; i < array.length; i++) {
  	if (!destinationArray.includes(array[i])) {
    	destinationArray.push(array[i]);
    } else {
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
  	}
  console.log(destinationArray);
  }
}

/* console.log(ingredientsPickledBeetSalad[1].splice(1, 1, "box"));
console.log(ingredientsPickledBeetSalad); */

doesItInclude(ingredientsVeggieSpringRolls, ingredientsPickledBeetSalad);

/* function combineIdenticalInstances(array, destinationArray) {
  for (let i=0; i < array.length; i++) {
    if (!destinationArray.includes(array[i])) {
      destinationArray.push(array[i]);
    }
  }
  console.log(destinationArray);
} */



//this funciton successfally compares 2 lists of ingredients and only adds ingredient arrays that do not already exist. what it does NOT do is add same ingredients together. the first list takes precedent and only that ingredient and its quantity are on the final list.
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
}



//this is the final working code



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
   
