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
