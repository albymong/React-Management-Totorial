'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoing -> createdCard, createPoint
// functon is object in JS

function printHeool(){
    console.log('Hello');
}
printHeool();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//typescriptlang.org

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie','test');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';//global variable
function printMessage(){
    let message = 'hello';//local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        let message = 'hello';//local variable
        console.log(message);
        console.log(globalMessage);
    }
    printAnother();
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}
//good - 조건이 맞지않은 경우를 우선적으로 리턴 시킨다.
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

// First-class function

//함수를 print에 할당
const print = function(){//anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;//위에서 sum function 만들었음.
console.log(sumAgain(1,3));

// Callback function using function expression
// 상황에 맞게 전달받은 함수를 호출해라.
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){//anonymous function
    console.log('yes!');
}
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print(){//named function
    console.log('No!');          //debugging 시 또는 함수안에서 자신을 호출할때
}
randomQuiz('wrong',printYes, printNo);
randomQuiz('love you',printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
//same
const add2 = (a, b) => {
    return a + b;
}

//IIFF : Immediately Invoked Function Expression
//함수를 바로 콜
(function hello(){
    console.log('IIFE');
})();