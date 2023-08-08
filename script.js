'use strict'

const quantityOfCategories = document.querySelectorAll(".item");
console.dir("Number of categories: " + quantityOfCategories.length);

const elementList = document.querySelectorAll(".item ul li");


const titleOfCategory = document.querySelectorAll("h2");
console.dir(titleOfCategory.forEach((element) => 
    console.dir("Category: " + element.textContent + "\nElements: " + elementList.length)));