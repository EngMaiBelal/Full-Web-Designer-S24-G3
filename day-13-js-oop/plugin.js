// 1) Inheritance => code in class can be use in other class, reduce code, no duplication
// class User {
//     fname;
//     constructor(age , password, lname){
//         this.age = age;
//         this.password =password;
//         this.lname =lname;
//     }
//     create(){
//         return "create user";
//     }
// }

// class Admin extends User{
//     constructor(age, password ,adminName){
//         super(age, password);
//         this.adminName = adminName;
//     }
// }

// let admin = new Admin(20, "kjggff", "hossam");
// admin.fname = "ahmed";
// console.log(admin.password);
// console.log(admin.adminName);
// console.log(admin.age);
// console.log(admin.create());



// 2) Encapsulation --> private property, getter, setter
// set, get
// class User{
//     // class scope
//     #image;
//     get Image(){
//         return this.#image;
//     }
//     set Image(image){
//         this.#image = image;
//     }
// } 

// global scope
// let obj = new User;
// obj.image =" my image";
// console.log(obj.image);
// obj.Image =" this is image";
// console.log(obj.Image);
// --------------------------------------

// class User{
//     image; // field
//     getImage(){
//         return this.image +" getter";
//     }
//     setImage(img){
//         this.image = img;
//     }

// } 

// let obj = new User;
// obj.setImage("cat");
// console.log(obj.getImage());
// ------------------------------------------------------
// access modifier, visibility marker, access specifier

// public [property, method] 
//         global scope, child scope, parent scope

// protected 
//         child scope, parent scope
// private
//         parent scope

// -------------------------------
// chaining method
// class Calculator{
//     constructor(value = 0){
//         this.value = value;
//     }
//     add(number){
//         this.value += number;
//         return this; 
//     }
//     sub(number){
//         this.value -= number;
//         return this; 
//     }
//     multiply(number){
//         this.value *= number;
//         return this; 
//     }
//     result(){
//         return this.value;
//     }
// }

// let obj = new Calculator(5);
// console.log(obj.add(10).result());

// --------------------------------

// static method, property

// class User{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     static fname ="omar";
//     static create(){
//         return "i am static method from parent";
//     }
//     stop(){
//         return "stop";
//     }
// }
// class Admin extends User{
//     constructor(x, y){
//         super(x,y);
//     }
//     // static create(){
//     //     return "i am static method from admin";
//     // }
//     static getStaticMethodParent(){
//         return super.create();
//     }
// }
// let admin = new Admin(5 , 2);
// console.log(admin.create());
// console.log(Admin.create());
// console.log(Admin.getStaticMethodParent());

// console.log(User.fname);
// console.log(User.create());
// console.log(User.stop());
// -------------------------------------------------
// 3) Abstruction
// nesseccery info --> show 
// unnesseccery info --> hide
// Abstruct class-> Height, width , area(); print(){ return hello } --> canot take obj 
// class child height= 100, width = 600 , area(){ width * height};

// interface --> abstract method only without any implement

// abstruct class crud{
//     create();
//     read();
//     update();
//     delete();
// }

// create , read, update, delete --> crud

// class child extends crud{
//     create(){
//         return ...
//     }
// }

// ----------------------------
// clean code
// oop ---> 
// solid principle
// design patterns
// ----------------------------
// class AbstractClass{
//     constructor(){
//         if(new.target === AbstractClass){
//             throw new Error("you canot make obj from me");
//         }
//     }
//     abstractMethod(){
//         throw new Error("you must implement this in child class");
//     }
// }
// class Child extends AbstractClass{
//     abstractMethod(){
//         return "i am child";
//     }
// }
// // const objChild = new Child;
// // console.log(objChild.abstractMethod());
// const objAbs = new AbstractClass;
// console.log(objAbs.abstractMethod()); 

// ----------------------------
// interface
// const interface = {
//     move(){
//         throw new Error("you must implement this method");
//     },
//     stop(){
//         throw new Error("you must implement this method");
//     }
// }
// class Car{
//     move(){
//         return "move";
//     }
//     stop(){
//         return "stop";
//     }
// }

// function implementInterface(obj, interface){
//     for(let method in interface){
//         if(typeof obj[method] !== 'function'){
//             throw new Error(" you must use method in interface with body");
//         }
//     }
// }
// const objCar = new Car;
// console.log(objCar.move());
// console.log(objCar.stop());
// implementInterface(objCar, interface);


// --------------------------------------
// class Calculator{
    //  calculate(...args){
        // return args.length;
        // if(args.length === 1){
        //     return args[0];
        // }
        // if(args.length === 2){
        //     return args[0] + args[1];
        // }
        // if(args.length === 3){
        //     return args[0] + args[1] + args[2];
        // }
        // if(args.length > 3){
        //    throw new Error('falseeeeee');
        // }
//         result = 1;
//         for(let i= 0; i < args.length ; i++){
//             result+= args[i];
//         }
//         return result;
//     }
// }
// let obj = new Calculator;
// console.log(obj.calculate(2, 3));
// -------------------------------------------
// polymorphism --> methods do samethings should be have same name ex---> override

// -------------------------------------
// emp={id:102,name:"Shyam Kumar",salary:40000} //literal 
// emp2={}  
// console.log(emp);
// console.log(emp2);


// var objectname = new Object();  //explicity
// objectname.fname = "omar";

// console.log(objectname);

// class User{

//    fname ="omar";
//    create(){
//         return "create";
//     }
//     stop(){
//         return "stop";
//     }
// }

// console.log(new User);
// console.log(new Object);
//  Object class --> the root of the protype chain all javascript objects
// --------------------------------------------------------------------


// const me = Object.create({
//     fname: "nadeen",
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// });
// me.name = "Marry"; // "name" is a property set on "me", but not on "person"  
// me.isHuman = true; // inherited properties can be overwritten  
// me.printIntroduction(); 
///////////////////////////////////

// const object1 = {  
//     property1: 22,
//     property2: 23  
//   };  

//   const descriptors1 = Object.getOwnPropertyDescriptors(object1); 
//   console.log(descriptors1);  

// //   console.log(descriptors1.property1.value);  
// //   console.log(descriptors1.property1);  
//   console.log(descriptors1.property1.writable); 
  
  

// ---------------------------
  // constructor  function
  
//   function Person(age, fname){
//     this.age = age;
//     this.fname = fname;
//   }
// Person.prototype.nationality = "arabic"
//   console.log(Person);
//   console.log(Person.prototype);


// Object.defineProperty
/////////////////////////////////////////////////
// --- prevent override
// class Parent{
//     constructor(){
//         Object.defineProperty(Parent.prototype, "move", {
//             value:function(){
//                 console.log("i'm parent")
//             },
//             writable:false,
//             configurable: false,
//         })
//     }
// }

// class Child extends Parent {
//     move(){
//         console.log("i'm child");
//     }
// }

// const parent = new Parent;
// // console.log(parent);
// parent.move();

// const child = new Child;
// child.move();




// circle


