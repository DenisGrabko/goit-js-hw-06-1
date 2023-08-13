"use strict"

/* //////////////////////////    1    /////////////////////////////// */ 
/* 
const elemList = document.querySelectorAll(".item");
console.dir("Number of categories " + elemList.length);



elemList.forEach((element) => {
    console.dir("Catgory: " + element.querySelector("h2").textContent)
    console.dir("Elements: " + element.querySelectorAll("ul li").length)});
*/
/* //////////////////////////    1    /////////////////////////////// */ 





/* //////////////////////////    2    /////////////////////////////// */ 
/*
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
const ingredientsId = document.querySelector('#ingredients');

ingredients.forEach((element) => { 
    const liEl = document.createElement("li");
    li.classList = "item"; 
    li.textContent = element;
    ingredientsId.insertAdjacentElement('beforeend', liELl);
}
    );
*/
/* //////////////////////////    2    /////////////////////////////// */ 



/* //////////////////////////    3    /////////////////////////////// */
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//   ];

// const ulList = document.querySelector(".gallery");

// images.forEach(element => {ulList.insertAdjacentHTML('beforeend' , `<li class="itemOfGallery"><img width="300px" height="200px" src=${element.url}></li>`)});
/* //////////////////////////    3    /////////////////////////////// */ 



/* //////////////////////////    4    /////////////////////////////// */ 

// const counterValueElem = document.querySelector('#value');

// const stepDown = document.querySelector('button[data-action="decrement"]');
// const stepUp = document.querySelector('button[data-action="increment"]');

// let counterValue = 0;

// function updateCounterValueElem() {
//     counterValueElem.textContent = counterValue;
// }

// const decrementF = () => {
//     counterValue -= 1;
//     updateCounterValueElem();
// };

// const incrementF = () => {
//     counterValue += 1;
//     updateCounterValueElem();
// };

// stepDown.addEventListener("click", decrementF);
// stepUp.addEventListener("click", incrementF);
/* //////////////////////////    4    /////////////////////////////// */ 



/* //////////////////////////    5    /////////////////////////////// */ 
// const inputField = document.querySelector("#name-input");
// const outputField = document.querySelector("#name-output");

// const funcForOutput = (event => {
//     outputField.textContent = event.currentTarget.value;
// })

// inputField.addEventListener("input", funcForOutput);
/* //////////////////////////    5    /////////////////////////////// */ 


/* //////////////////////////    6    /////////////////////////////// */ 
// const textInput = document.querySelector("#validation-input");
// const lineLengthTemplate = parseInt(textInput.getAttribute('data-length'));


// const funcCheckLength = () => {
//     textInput.classList.remove('valid', 'invalid');
//     if (textInput.value.length === lineLengthTemplate) {
//         textInput.classList.add('valid');}
//     else {textInput.classList.add('invalid');}
    
// }

// textInput.addEventListener("blur", funcCheckLength);
/* //////////////////////////    6    /////////////////////////////// */ 



/* //////////////////////////    7    /////////////////////////////// */ 
// const textInput = document.querySelector('#font-size-control');
// const textSpan = document.querySelector('#text');

// const changeFontSize = () => {
//     const takeFontSize = textInput.value + "px";
//     textSpan.style.fontSize = takeFontSize;
// };

// textInput.addEventListener("input", changeFontSize);
/* //////////////////////////    7    /////////////////////////////// */ 






