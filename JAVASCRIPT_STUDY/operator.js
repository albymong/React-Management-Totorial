'use strict';

console.log('==================================');
console.log('= 1. String concatenation =');
console.log('==================================');
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);
console.log("ellie's \n\tbook");
console.log('==================================');
console.log('= 2. Numeric operators =');
console.log('==================================');
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1*1);//multiply
console.log(1%1);//remainder
console.log(1**1);//exponentiation
console.log('==================================');
console.log('= 3. Increment and decrement operators =');
console.log('==================================');
let counter =2;
const preIncrement = ++counter;
console.log(`preIncrement:${preIncrement}, counter:${counter}`);
const postIncrement = counter++;
console.log(`postIncrement:${postIncrement}, counter:${counter}`);
const preDecrement = --counter;
console.log(`preIncrement:${preDecrement}, counter:${counter}`);
const postDecrement = counter--;
console.log(`postIncrement:${postDecrement}, counter:${counter}`);

console.log('==================================');
console.log('= 4. Assignment operators =');
console.log('==================================');
let x = 3;
let y = 6;
x += y;//x = x +y;
x -= y;
x *= y;
x /= y;

console.log('==================================');
console.log('= 5. Comparison operators =');
console.log('==================================');
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

console.log('==================================');
console.log('= 6. Logical operators : || (or), && (and), ! (not) =');
console.log('==================================');
const value1 = false;
const value2 = 4 < 2;
// || (or), finds the first truthy value
// 가벼운걸 맨 앞으로
console.log(`or: ${value1 || value2 || check()}`);
function check(){
    for(let i=0;i<10;i++){
        console.log(i);
    }
    return true;
}
// && (and), finds the first truthy value
console.log(`and: ${value1 && value2 && check()}`);
//often used to compress long if-statemtn
//nullableObject && nullableObject.something
//if(nullableObject != null){}
console.log('==================================');
console.log('= 7. Equality =');
console.log('==================================');
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equlity by reference : reference가 메모리에 저장
const ellie1 = {name:'elllie'};
const ellie2 = {name:'elllie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
console.log('==================================');
console.log('= 8. Conditional operators : if =');
console.log('==================================');
//if, else if, else
const name = 'coder';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unKwnon');
}
console.log('==================================');
console.log('= 9. Ternary operators : ? =');
console.log('==================================');
//condition ? value1 : value2
console.log(name === 'ellie'?'yes':'no');

console.log('==================================');
console.log('= 10. Switch statement =');
console.log('==================================');
//use for mulitple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
console.log('==================================');
console.log('= 11. Loops =');
console.log('==================================');
// While loop, while the condition is truthy,
// body code is executed.
let i=3
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body  code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin: condition: step)
for (i = 3; i >0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i >0; i=i-2){
    //inline variable declatation
    console.log(`inline variable for: ${i}`);
}

// nested loops => 되도록 피하는것이 좋음.
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
for (let i = 0; i < 11; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
for (let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}