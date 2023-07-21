'use strict';

//Array
//1.Declaration 선언
const arr1 = new Array();
const arr2 = [1,2];

//2.Index position
const fruits = ['A','B'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

//3.Looping over an array
//print all fruits
console.clear();
//a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
//fruits.forEach(function(fruit,index,array){
//    console.log(fruit, index, array);
//})
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion, deletion, copy
//push: add an item ot the end
fruits.push('C','D');
console.log(fruits);
//pop: remove an item form the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift('C','D');
console.log(fruits);

// shift : remove an item to the benigging
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//splice : remove an item by index position

fruits.push('E','F','G');
console.log(fruits);
//fruits.splice(1);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1,'H','I');//지우고 나서 원하는 데이터를 넣는다.
console.log(fruits);

//combine two arrays
const fruits2 = ['J','K'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf:find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('E'));
//includes
console.log(fruits.includes('E'));
//lastIndexOf
console.clear();
fruits.push('E');
console.log(fruits);
console.log(fruits.indexOf('E'));
console.log(fruits.lastIndexOf('E'));


