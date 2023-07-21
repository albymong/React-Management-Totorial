'use strict';
// Objects
// one of the JavaStript's dat types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are intances of Object
// object = {key : value}

//1. Literals and properties
const obj1 = {};//'object literal' syntax
const obj2 = new Object();//'object contructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name:'ellie', age:4};
print(ellie);

//뒤늦게 하나의 프로퍼티를 추가 가능
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
console.log(ellie.name);   //코딩하는 순간 키에 해당하는 값을 받아오고 싶을때.
console.log(ellie['name']);//key should be always string
                           // 런타임시 결정될때.. 정확히 우리가 어떤키인지 모를때

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');

//3. Property value shorthand
const person1 = {name:'bob', age:3}
const person2 = {name:'steve', age:4}
const person3 = {name:'dave', age:5}
const person4 = makePerson('ellie', 6);
console.log(person4);
function makePerson(name, age){
    return {
        //name : name,
        //age : age

        //Property value shorthand
        //key, value 의 이름이 동일하다면 생략할 수 있다.
        name,
        age
    }
}

//4. Constuctor function
const person5 = new Person('ellie', 6);
console.log(person5);
//순수하게 Object를 생성하는 함수
//함수명 대문자
function Person(name, age){
    // this = {};생략됨
    this.name = name,
    this.age = age
    //return this;생략됨
}

//5. in operator : property existaence check (key in obj)
//   object 안에 해당되는 키가 있는지 여부 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for..in vs for..of
// for (key in obj)
//console.clear();
for(let key in ellie){
    console.log(key);
}
// for (value of iterable)
const array = [1,2,3,4,5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

for(let value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1,obj2,obj3...])
// memory 
// user => ref => value
// user2 => ref(동일)
const user = {name:'ellie', age:'20'}
const user2 = user;

//old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//next way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
const fruit3 = {color : 'blue2', size:'small', aaa:'aaa'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
//뒤에있는 obj2에 속성값이 obj1에 동일한 속성값이 있으면 덮어 쒸워진다.
console.log(mixed.color);
console.log(mixed.size);


