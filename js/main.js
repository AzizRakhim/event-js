/*
let elBtn = document.querySelectorAll(".btn");

for(let i = 0; i < elBtn.length; i++){
  elBtn[i].addEventListener("click", buttonClick);
}

function buttonClick(event) {
  document.body.style.background = "red";

  // console.log(e.target);

  event.target.className = "btn btn-primary";
}
*/

/*
let elBtn = document.querySelectorAll(".btn");

for(let i = 0; i < elBtn.length; i++){
  elBtn[i].addEventListener("click", function(e) {
    console.log(e.target.className);
    console.log(e.target.classList);
  });
}
*/

// let elBtn = document.querySelector("#button");

/*
elBtn.addEventListener("click", buttonClick);

function buttonClick(e){
  let outPut = document.querySelector("#output");
  // console.log(e.target);

  outPut.innerHTML = "<h2>" + e.target.id + "</h2>";  

  // console.log(e.type);

  // console.log(e.clientX);

  // console.log(e.clientY);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}
*/

// elBtn.addEventListener("click", buttonClick);

// elBtn.addEventListener("dblclick", buttonClick);

// elBtn.addEventListener("mousedown", buttonClick);

// elBtn.addEventListener("mouseup", buttonClick); 

// function buttonClick(e) {
//   console.log("Event type: " + e.type);
// }

const elBtn = document.querySelector("#button");
const elBox = document.querySelector("#box");
const outPut = document.querySelector("#output");

// elBox.addEventListener("click", runevent);

// elBox.addEventListener("mouseenter", runevent);

// elBox.addEventListener("mouseleave", runevent);

// elBox.addEventListener("mouseover", runevent);

// elBox.addEventListener("mouseout", runevent);

/*
elBox.addEventListener("mousemove", runevent);

function runevent(e) {
// console.log("Event type: " + e.type);

  outPut.innerHTML = `<h3> MouseX: ${e.offsetX} <br> MouseY: ${e.offsetY}</h3>`
  // document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
  elBox.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}
*/

const itemInput = document.querySelector("input[type='text']");
const form = document.querySelector("form");
const itemList = document.querySelector("#items");

// itemInput.addEventListener("keydown", runevent);

/*
itemInput.addEventListener("keyup", runevent);

function runevent(e) {
  // console.log("Event type: " + e.type);
  outPut.innerHTML = `<h2> ${e.target.value} </h2>`
  console.log(e.target.value);
}

*/

form.addEventListener("submit", addItem);

function addItem(e) {
  e .preventDefault();

  let newItem = itemInput.value;

  let li = document.createElement("li");

  li.className = "list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = "X";

  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  itemInput.value = "";

  console.log(li);
}