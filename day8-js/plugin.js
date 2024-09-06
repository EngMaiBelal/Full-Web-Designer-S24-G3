// 1- loops
// var start = 10; // intial value
// while(start < 10){  // condition
//     console.log(start); //code
//     // start = start + 2;
//     start+=2;
// }

// var start = 10; // intial value
// do
// {
//     console.log(start); //code
//     start+=1; //step
// }
// while(start < 10) //condition

// for(inital; condition; step){

// }
// for( start = 0; start < 10; start++){
//     console.log(start);
// }
// continue, break
// for( start = 0; start < 10; start++){
//     if(start == 5){
//         // break; // from all loop
//         continue; // stop current iteration
//     }
//     // console.log("this is iteration number "+start +"kjkjkjkj ");
//     console.log(`this is iteration number   "${start}"`);
// }

// var sum = 0;
// while(sum < 100){
//     var number = prompt("enter the number");
//     sum+= parseInt(number);
//     console.log(sum);
// }

// var userName = null; // null
// var userName; // undefined
// // var userName = ""; // empty string
// // console.log(typeof(userName));
// while(userName == null || userName == ""){
//         userName = prompt('your user name');
//         console.log(userName);
// }
// console.log("thanks");

// var userName;
// do{
//     userName = prompt('your user name');
//     console.log(userName);
// }
// while(userName == "")
// console.log("thanks");
// ---------------------------------------------------
// date object
// var myDate= new Date();
// console.log(myDate.getFullYear());
// ---------------------------------------------------
// console.log(!3); 3*2*1 factorial
// ----------------------
// function => block of code 
// function functionName(){ //declaration
//     return 'omar';
// }
// var h = functionName(); //invoce
// console.log(h);
// console.log(h);
// console.log(h);
// console.log(h);

// sum(2, 3);
// function sum(x, y){
//    console.log( x + y);
// }

// h = sum(2, 3);
// console.log(h);
// -------------------------------------------
// difference between let, var, const
// 'use strict' prevent redeclaration to var
// var x = 3;    // old code reassign , redecleration
// var x = 5;
// x= 8;
// x= true;

// const h = 6;  // cannot redeclaration , reassignment , no hoisting

// let y = 5;    // cannot redclaration , re assignment, no hoisting
// y = "ahmed";
// let y = "hossam";
// ------------------------------------------------
// scopping
// 1- global scope 
// 2- block scope
// const k = console.log();

// let localVar = 100 ; // block scope
// function myFun(){
//     // let localVar = 100 ; // block scope
//     if(true){
//         console.log(`1- ${localVar}`); //localscope
//     }
//     console.log(`2- ${localVar}`);
//     function nested(){
//         console.log(`3- ${localVar}`);
//     }
//     nested();
// }
// myFun();
// console.log('ok');
// console.log(`4- ${localVar}`);
// console.log('ok');

// var localVar = 100 ; // globalscope

// myFun(); //hoisting
// function myFun(){
//     if(true){
//         // var localVar = 100 ; // local = block
//         console.log(`1- ${localVar}`);
//     }
//     console.log(`2- ${localVar}`);
//     function nested(){
//         console.log(`3- ${localVar}`);
//     }
//     nested();
// }
// // console.log('ok');
// console.log(`4- ${localVar}`);
// console.log('ok');
// ----------------------------------------------------
// shadowing
// var h = 2; // and let convert the refrence
// console.log(h); //2

// function sum(){
//     h = 9 + 10;
//     console.log(h); //19
// }
// sum();
// console.log(h); //19


// shadwing in redeclaration var
// var h = 2; 
// console.log(h); // 2
// function sum(){
//     var h = 9 + 10; //19
//     console.log(h); 
// }
// sum();
// console.log(h); //2

// ------------------------------------------------------
// difference between convertaion value or reference
// let h = 2;  // change value
// console.log(h); // 2

// function sum(h){
//     h+= 17;
//     console.log(h); //19
// }
// sum(h);
// console.log(h); //2

// -----------------------------------------------
// let h = 2;  // change refrence
// console.log(h); // 2

// function sum($h){
//     h+= 17;
//     console.log(h); //19
// }
// sum(h);
// console.log(h); //19

// -------------------------
// shadwing
// 1- first example
// The Secret 
// the little prince 
// the little prince 


// 2-next example
// the secret 
// the little prince 
// the secret 

// ------------------------------------------
// recursive function ---> limit /// (callback function)
// function countFruits(number){
//     console.log(number); //3 2 1 0
//     if(number > 0){
//         countFruits(number-1); //countFruits(0)
//     }
// }
// countFruits(3);
// ----------------------------------------------
// hoisting
// console.log(x);
// sayHello();
// function sayHello(){
//     var x = 3;
//     console.log(x);
    
// }
// variable, function declaration in code start
// console.log(x);
// var x = 7;

// -----------------------
// anonymous function // donot work in hoisting
// var x = function(){return "hhh";};
// console.log(x());

// x();
// var x = function(){console.log( "hhh");};
// callback function
// var hello = function(){return('hello')};

// function catHello(x){
//     return "cat "+ x;
// }
// console.log(catHello(hello()));

// -----------------------------
// arrow function 

// var hello = ()=>'hello';
// var h = function hello(){
//     return "hello";
// }
// console.log(h());
// -----------------------------

// function in js as Object (propertie arguments)
// function myfun(){
//     console.log(arguments);
// }
// myfun(1, 2, 3, 4);

// parameters, arguments
// ----------------------------
// function test(){
//     return "test";
// }
// console.log(test); // syntax function
// console.log(test()); //test

// var x = new Number(5);
// console.log(x);

// -------------------------
// default parameter
// function myFun(x , z, y = 2){
//     console.log(x + y + z);
// }

// myFun(5,3);
// truthy
// // true,1,"ali,"null","false", all number without 0, {},[]
// falsy
// // false, null, 0, undefined, NaN, "" empty string
// var x;
// console.log("");
// null => value = null,type = object 
// undefined => value, type =undefined
// NaN => value = NaN , type = number
// ---------------------------------------
// number Method
console.log(Math.ceil(3.3)); // to large
console.log(Math.floor(3.9)); // to lower
console.log(Math.round(3.3)); // 
console.log(Math.round(3.5)); //
console.log(Math.max(2, 8, 5));
