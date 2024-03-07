// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullname);
// console.log(myFunction);
// var myFunction=function(){
//     console.log("this is my function");
// }
//-------------------------------------------------------------
// console.log("hello");
// let firstname="anurag";
// let lastname="sharma"
// const myFunction=function(){
//     let var1="First Variable";
//     let var2="second variable";
//     console.log(var1);
//     console.log(var2);
// }
//----------------------------------------------------------------
// console.log(myFunction);
// let foo="foo";
// console.log(foo);
// function getFullName(firstname,secondname){
//     console.log(arguments);
//     let myvar="var inside func";
//     console.log(myvar);
//     const fullName=firstname + " " + secondname;
//     return fullName;
// }
//--------------------------------------------------------------------
// const personName=getFullName("anurag","sharma");
// console.log(personName);
// const lastname="sharma";
// const printname=function(){
//     const firstname="anurag";
//     console.log(firstname);
//     console.log(lastname);
// }
// printname();
//-----------------------------------------------------------------------
//closure

// function printFullName(firstname,lastname){
//     function printName(){
//         console.log(firstname,lastname);
//     }
//     return printName;
// }
// const ans=printFullName("anurag", "sharma");
// ans();
//---------------------------------------------------------
// function hello(x){
//     const a="varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans=hello("arg");
// ans();
//---------------------------------------------------------------
// function myFunction(power){
//     return function (number){
//         return number**power;
//     }
// }
// const square=myFunction(4);
// const ans=square(2);
// console.log(ans);
//------------------------------------------------------------
// function func(){
//     let c=0;
//     return function(){
//         if(c<1){
//             console.log("you called me!!!");
//             c++;
//         }
//         else{
//             console.log("fir call q kar raha h chutiya");
//         }
//     }
// }
// const myFunc=func();
// myFunc();
// myFunc();
// myFunc();
//------------------------------------------------
//DOM
//--------------------------------------------------------------
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);
//----------------------------------------------------------------
// change text 
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);
//-----------------------------------------------------------------
// change the styles of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid green";
//-------------------------------------------------------------------
// get and set attrubutes

// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href"));
//-----------------------------------------------------------------
// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));
//--------------------------------------------------------------------
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
//------------------------------------------------------------------
//const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
//console.log(navItems);
//console.log(Array.isArray(navItems));
 //const navItems = document.querySelectorAll(".nav-item"); // NodeList
 //console.log(navItems);
 //console.log(navItems[1]);
//--------------------------------------------------------
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 

//let navItems = document.getElementsByTagName("a"); // HTMLCollection
 //console.log(navItems);
//----------------------------------------------------------------
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//       console.log(navItems[i]);
//      const navItem = navItems[i];
//      navItem.style.backgroundColor = "#fff";
//      navItem.style.color = "green";
//      navItem.style.fontWeight = "bold";
//  }
//--------------------------------------------------------------------
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
//------------------------------------------------------------------
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
//-------------------------------------------------------------------
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);
//-----------------------------------------------------------
// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
//-------------------------------------------------------------------
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
//-------------------------------------------------------
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);
//--------------------------------------------------------
// innerHtML 

//const headline = document.querySelector(".headline");
//  console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
//  headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML);
//-------------------------------------------------------------------
const rootNode = document.getRootNode();
 console.log(rootNode);
 const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); NodeList(3)[head, text, body];
 const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
 const bodyElementNode = htmlElementNode.childNodes[2];
 console.log(headElementNode.childNode);
//-------------------------------------------------------
// sibling relation 

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
//onst container = document.querySelector(".container");
//console.log(container.children);
//-------------------------------------------------------------
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");
//const header = document.querySelector(".header");
// header.classList.add("bg-dark");
//console.log(header.classList);
//----------------------------------------------------------
// Add new HTML elements to page 
// innerHTML to add html element

//const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";
// when you should use it , when you should not
//todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')

// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";


// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);

//const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);

// // how to get the dimension of element
// // height width 
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);

// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
//const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });

// this keyword
// const btn1= document.querySelector(".btn-headline");

// btn1.addEventListener("click",function(){
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this);
// });

// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


//const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget);
//     })
// }


// console.log("script start !!!!!")
//const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")

// little practice with click event
//const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

// allButtons.forEach(button =>{
//     button.addEventListener("click", (e)=>{
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })

// keypress event
// mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
// const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });

// mainButton.addEventListener("mouseleave", () => {
//   console.log("mouseleave event ocurred!!!");
// });

// console.log("hello world");

//const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });

//const todoForm = document.querySelector(".form-todo");
//const todoInput = document.querySelector(".form-todo input[type='text']");
//const todoList = document.querySelector(".todo-list");

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTodoText = todoInput.value;
//   const newLi = document.createElement("li");
//   const newLiInnerHtml = `
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`;
//   newLi.innerHTML = newLiInnerHtml;
//   todoList.append(newLi);
//   todoInput.value = "";
// });

//todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
 // if (e.target.classList.contains("remove")) {
   // const targetedLi = e.target.parentNode.parentNode;
    //targetedLi.remove();
  //}
  //if (e.target.classList.contains("done")) {
    //const liSpan = e.target.parentNode.previousElementSibling;
    //liSpan.style.textDecoration = "line-through";
  //}
//});
