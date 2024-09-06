// function sum(x, y){
//     if(!(isNaN(x) && isNaN(y))){ => true(not number), false(number)
//         return x + y; 
//     }
//     return ......;
// }
//  self-invoking function

// (function(){alert('hello mai');})();

// var operation = prompt('enter your operation');
// console.log(eval(operation));
// var number = prompt('enter your number');
// if(isFinite(number)){
//     console.log('it\'s number');
// }else{
//     console.log("it is not number");

// }
// --------------------------------------------------
// string method & properties
// let number = 25;
// console.log(number.length);
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);
// console.log(text.charAt(6));
// console.log(text.at(6));
// console.log(text[6]);

// let text1= "my";
// let text2= "name";
// let text3 = text1.concat("",text2);
// console.log(text3);

// let text1 = "      Hello  World!      ";
// let text2 = text1.trim();
// console.log(text2);
// let text1 = "Hello  World Hello  World!";
// let text2 = text1.replace('Hello', 'welcome');
// console.log(text1);
// console.log(text2);

// let text1 = "Hello , World , Hello ,  World!";
// let text2 = text1.split(',');
// console.log(text1);
// console.log(text2);
// --------------------------------------------------------
// Array
// let newArr = [9, "kamal" ,true];
// console.log(newArr[8]); //get element
// newArr[3]= "omar"; // add
// newArr[newArr.length] = 3; // add without gaps
// newArr[0]= "mona"; //update
// console.log(newArr);

// let arr= [
//         ["mai", 30, 9878],
//         ["hossam", 21, 7899],
//         ['mariam', 20, 6875]
// ];
// console.log(arr[2][1]);
// let fruits = ["Banana", 3, "apple", "Orange", "Apple", "Mango"];
// fruits.pop(); //delete the last element
// fruits.shift();  //delete the first element
// fruits.unshift("blablabla"); // add at the first
// fruits.push("blablabla"); //add at the last
// fruits.sort();
// console.log(fruits)

// fruits.reverse();

// console.log(fruits)


// -------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];


// // console.log(fruits.splice(2, 2, "Lemon", "Kiwi"));
// let newFruits = fruits.slice(1);
// console.log(newFruits);

// const fruits = [firstEl:"Banana", secondEl:"Orange", third"Apple", "Mango"];

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46; 
// console.log(person);
// // console.log(typeof(fruits));
// console.log(person instanceof Array);
// console.log(Array.isArray(fruits));
// console.log(person.length);

// let text= new String("mohamed");
// console.log(typeof(text));
// --------------------------------------------------------
// looping in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for(let i = 0 ; i < fruits.length; i+=2){
//     console.log(fruits[i]);
// }
// fruits.forEach(function(element, index, array){
//     console.log(array[index]);
// });
// fruits.forEach((element, index, array) => {console.log(array[index])});

// findIndex, find, filter

// let numbers = [1, 8, 9, 3, 5]
// console.log(numbers.findIndex(findItem));
// function findItem(num){
//     return num > 2;
// }
// console.log(numbers.find(findItem));
// function findItem(num){
//     return num > 2;
// }
// console.log(numbers.filter(element => element > 2));

// for in
// let numbers = [1, 8, 9, 3, 5];
// // for(let i in numbers){  // let i as index
// //     console.log(numbers[i]);
// // }
// for(let i of numbers){ // let i as element(value)
//     console.log(i);
//     // console.log(numbers[i]);
// }

// Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// // Destructuring
// let [fruit1,,,fruit2] = fruits;
// console.log(fruit2);

// -----------------------------------------

// object
// let newObj = {
//     fname: "mai", // property
//     lname: "mohamed",
//     id: 20,
//     age: 30,
//     printfullName: function(){   //method
//         return ( this.fname + " "+ this.lname).toUpperCase(); // this => refer to current obj
//         // console.log("mai mohamed");
//     }
// } 
// - access property in obj
// console.log(newObj.id);
// console.log(newObj['id']);
// ------------------------------------------
// newObj['lName']="mohamed";
// console.log(newObj.printfullName());
// console.log(newObj);
// newObj.fname = "omar";
// console.log(newObj);
// delete newObj.id;
// console.log(newObj);

// ------------------------------------------------
// let newObj = {
//     "fname": "mai",
//     "1lname": "mohamed",
//     "1id": 20,
//     "1age": 30,
// } 
// console.log(newObj['1id']);
// console.log(newObj.1id);
// ----------------------------------------------------------
// Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   // Build a Text
//  let text= " ";
//  for (let index in person) {
//     text += person[index];
//  }
  
//   // Display the Text
//   document.getElementById("demo").innerHTML = text;
// --------------------------------------------------------------

const test =[ 
	{
  		name: "John",
  		age: 30,
  		cars: [
    			{name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    			{name:"BMW", models:["320", "X3", "X5"]},
    			{name:"Fiat", models:["500", "Panda"]},
  		]
	},
    
];

// my name is john and my car name is fiat and model panda with 500
console.log(test[0].name);
console.log(test[0].cars[2].name);
console.log(test[0].cars[2].models);









// callback , dynamicArg, maploop(search), sets, maps