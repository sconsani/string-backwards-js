//SAMMY CONSANI
//create a function that will print a string backwards:

const printString = () => {
  //print string to the console regularly
  let string = "string"
  console.log(string);
//need to split the string into individual letters
//https://www.w3schools.com/jsref/jsref_split.asp
//this console.logs each letter as a string in an array -->
  let splitstr = string.split("");
//save the new array of strings as a variable-->
  let stringarray = splitstr;
//https://www.w3schools.com/jsref/jsref_pop.asp

//for loop to go through each one starting at the end and print to console 
let backwards = []; //this was crucial to have outside of the loop scope
for (let i = stringarray.length-1; i >= 0; i--) {
// console.log(backwards) //this prints each one into a new array- not necessary
//https://www.w3schools.com/jsref/jsref_push.asp
//as it loops through the stringarray- it takes pushes each element into the empty one
    backwards.push(stringarray[i]);
//how to concat arrays together
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//https://www.w3schools.com/jsref/jsref_join.asp
    backwardsarray = backwards.join("");
} 
  console.log(backwardsarray); //this needs to be outside the loop so it doesn't print every time

};

printString();



