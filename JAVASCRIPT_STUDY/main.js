// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
console.log('==================================');
console.log('= 1. Use strict =');
console.log('==================================');
console.log('Hello World!');
let a;
a = 6;

// 2. Variable, rw(read/write) : 메모리에 값을 읽고 쓰는게 가능
// let (added in ES6)
console.log('==================================');
console.log('= 2. Variable =');
console.log('==================================');
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello!!!';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block sope
console.log('==================================');
console.log('= 2. Variable > var =');
console.log('==================================');
{
 age = 4;
 var age;   
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// Immutable data type : premitive types, frozen objects (i.e object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety 
// - reduce human mistakes
console.log('==================================');
console.log('= 3. Const =');
console.log('==================================');

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive => single Item : number, string, boolean, null, undefined, symbol
//     : value가 메모리에 저장
// object => box container
//     : object가 가리키는 레퍼런스가 메모리에 저장
// function => first-class function
console.log('==================================');
console.log('= 4. Variable types =');
console.log('==================================');
const count = 17;//integer
const size = 17.1;//decimal number
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);
// number - special nummeric values:infinity, -infinity, NaN
console.log('==================================');
console.log('= 4. Variable types number =');
console.log('==================================');
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// bigInt (fairly new, don't use it yet)
console.log('==================================');
console.log('= 4. Variable types bigInt =');
console.log('==================================');
const bigInt = 12345678901234567890123456789012345678901234567890n;//over(-2**53) ~ 2**53
console.log(`value:${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
//string
console.log('==================================');
console.log('= 4. Variable types string =');
console.log('==================================');
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value:${brendan}, type:${typeof brendan}`);
const helloBob = `hi ${brendan}`;//template literals (string)
console.log(`value:${helloBob}, type:${typeof helloBob}`);

//boolean
// false: 0, null, undefined, NaN, ''
// true: anyother value
console.log('==================================');
console.log('= 4. Variable types boolean =');
console.log('==================================');
const canRead = true;
const test = 3 < 1;
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

// null
console.log('==================================');
console.log('= 4. Variable types null =');
console.log('==================================');
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);
//undefined
console.log('==================================');
console.log('= 4. Variable types undefined =');
console.log('==================================');
let x;
console.log(`value:${x}, type:${typeof x}`);
//simbole => create unique indentifiers for objects
console.log('==================================');
console.log('= 4. Variable types simbole =');
console.log('==================================');
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');//동일한 값으로 심볼을 정의 for
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol1);
console.log(`value:${symbol1.description}, type:${typeof symbol1}`);

//object => real-life object, data structure
console.log('==================================');
console.log('= 4. Variable types object =');
console.log('==================================');
const ellie = {name:'ellie', age:20};
ellie.age =12;

// 5. Dynamic typing: dynamically typed language
console.log('==================================');
console.log('= 5. Dynamic typing: dynamically typed language =');
console.log('==================================');
let text = 'hello';
console.log(`value:${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = '7'+1;
console.log(`value:${text}, type:${typeof text}`);
text = '8' / '2';
console.log(`value:${text}, type:${typeof text}`);

