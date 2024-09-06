// DOM-object
let mainHeader = document.getElementById('main');
// let mainHeader = document.getElementsByTagName('h1');
// let mainHeader = document.getElementsByName('header');
// let mainHeader = document.getElementsByClassName('demo');
// let mainHeader = document.querySelectorAll(".demo"); //--> array of elements
// let mainHeader = document.querySelector(".demo"); //-->  element

mainHeader.name = "head"; //==> problem

// document.getElementById('image-main').src = "front-page-header.jpg";
// ---------------------------------------------------------------
// add element
// let newElement = document.createElement('p');
// newElement.innerHTML = "this is new element";

// document.body.appendChild(newElement);
// document.getElementById('parent').appendChild(newElement);
// ------------------------------------------------------------
// const list = document.getElementById('mylist');
// list.removeChild(list.firstElementChild);

// --------------------
// const oldElement = document.getElementById('mylist').children[0];
// const newElement = document.createTextNode("water");
// oldElement.replaceChild(newElement, oldElement.childNodes[0]);
// -------------------
// events
// let header = document.getElementById("main");
// header.onclick = displayDate;

// function displayDate(){
//     document.getElementById('demo').innerHTML = Date();
// }

// // ------------------------------
// function upperCase(){
//     let elem = document.getElementById('fname');
//     elem.value = elem.value.toUpperCase();
// }

// ----------------------
// const par = document.getElementById('demo');
// par.style.fontSize = "20px";
function convertColor(element){
    element.style.color = "red";
}
let element = document.getElementById('myBtn');
element.addEventListener("mouseover", firstFun);
element.addEventListener("click", secondFun);
element.addEventListener("mouseout", thirdFun);


let par = document.getElementById("myPar");
function firstFun(){
   par.innerHTML +="<br> mouse over <br>";
}
function secondFun(){
    par.innerHTML +="clicked  <br>";
}
function thirdFun(){
    par.innerHTML +="mouse out  <br>";
}