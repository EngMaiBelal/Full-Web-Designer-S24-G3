
// procedural programming  // oop => opject oriented programming
// function sum(x, y){
//         return x+ y;
// }
// function sub(x, y){
//     return x - y;
// }

// 1- organize structure
// 2- group similar task into one class

// more dynamic 
// more secure 
// more clean code for developers
// easy to maintain

// principle
// 1- Inheritance
// 2- Abstruction
// 3- Encapsulation
// 4- polymorphism
// class , Object
// class => blueprint which objects to creation  الرسم الهندسي // declered once
// object => instance of class  عماره //create objects many times  for the same class
// let newObj = {
//     fname: "hossam",  //property
//     id: 12,
//     msgPrint: function(){  // method
//         return this.fname;
//     }
// }
// newObj.msgPrint();


// ------------------
// class User{
//     name = "ali"; //property
//     email;

//     insertData(){ //method
//         return `my name is ${this.name} , my email is ${this.email}`
//     }
// }

// let userObj = new User;
// userObj.email = "ali@gmail.com";
// console.log(userObj.insertData());

// let user2 = new User;
// user2.name = "omar";
// user2.email = "omar@gmail.com";
// console.log(user2.insertData());


// ------------------
// no hoisting
// let objUser= new User("mai", "mai@gmail.com");
// let objUser2= new User("mona", "mona@gmail.com");
// console.log(objUser.insertData());
// console.log(objUser2.insertData());
// class User{
//     // name;
//     // email;
//     constructor(myname , myemail){
//         this.name = myname;
//         this.email = myemail;
//     }
//     insertData(){ //method
//         return `my name is ${this.name} , my email is ${this.email}`
//     }
// }

// let objUser= new User("mai", "mai@gmail.com");
// let objUser2= new User("mona", "mona@gmail.com");
// console.log(objUser.insertData());
// console.log(objUser2.insertData());

// ------------------------ Inheritance  -> reduce code, organize
// super with constructor

// user  --> name, email, password, update() profile, delete() , create() 
// admin ---> name, email, password, permission db
// super admin --> name, email, permission, crud()->user ,admin

// class User{
 
//     constructor(userName, email){
//         this.userName = userName;
//         this.email = email;

//     }
//     updateProfile(){
//          return `my name is ${this.userName} , my email is ${this.email}`
//     }
// }
// class Admin extends User{
//    constructor(userName, email,permission){ // when create obj
//     super(userName, email); // properties from parent class
//     this.permission = permission;
//    }
//    deleteProfile(){
//      return "delete "+ this.permission;
//    }
// }


//  let adminObj = new Admin('mahmoud','mahmoud@gmail','admin');
//  console.log(adminObj.updateProfile());
//  console.log(adminObj.deleteProfile());

// -------------------------
// wihout constructor
// chaining inheritance
// class User{
//     userName;
//     email;
//     updateProfile(){
//          return `my name is ${this.userName} , my email is ${this.email}`
//     }
// }
// class Admin extends User{
//    permission ="admin";
//    deleteProfile(){
//      return "delete "+ this.permission;
//    }
// }
// class SuperAdmin extends Admin{

// }

//  let adminObj = new Admin;
//  adminObj.userName = "mahmoud";
//  adminObj.email = "mahmoud@gmail.com";
// console.log(adminObj.updateProfile());
// console.log( adminObj.userName);
// ------- ------- ------- -------
// js doesnot support multiinheritance 
// class employee extends User{
// }

// Encapsulation 
// class User{

//    constructor(name){
//         this.userName = name;
//    }
//     get fname(){
//       return this.userName;
//     }

//     set fname(x){
//         this.userName = x;
//     }
// }

// let newObj = new User("seif");

// console.log(newObj.fname);
// ------------------
// properies, method with implemetation

// different between Override , overload

// override consept --> inheritance, polymorphism
// class User{
//     userName;
//     email;
//     updateProfile(){
//          return `my name is ${this.userName} , my email is ${this.email}`;
//     }
// }
// class Admin extends User{
    
//    permission ="admin";
//    deleteProfile(){
//      return "delete "+ this.permission;
//    }
//    updateProfile(){
//      return "I am Admin";
//    }
// }

// let adminObj = new Admin;
// console.log(adminObj.updateProfile());
// -----------------
// overloading
// updateProfile(x, y){
//     return `my name is ${this.userName} , my email is ${this.email}`;
// }
// updateProfile(){
//     return "I am Admin";
// }


// ------------------------

// mixins

// const img = {
//     uploadImage(){
//         return "image";
//     }
// }


// class User{
//    constructor(fname){
//         this.fname = fname;
//         Object.assign(this, img);
//    }
// }
// class Admin extends User{
//     constructor(fname){
//         super(fname);
//         Object.assign(this, img);
//     }

// }
// const userObj = new User("nadeen");
// console.log(userObj.uploadImage());
//  const adminObj = new Admin("omar");
//  console.log(adminObj.uploadImage());

// -----------------------------------
class Image{
    uploadImage(){
        return "image";
    }
}


class User{
   constructor(fname){
        this.fname = fname;
        Object.assign(this, this.image);
   }

   image(){
     return new Image;
   }
   
}

class Admin extends User{
    constructor(fname){
        super(fname);
        
        // Object.assign(this, new Image);
    }

}


const userObj = new User("nadeen");
// console.log(userObj.image().uploadImage());


 const adminObj = new Admin("omar");
 console.log(adminObj.uploadImage());
// -------------------
// inheritance