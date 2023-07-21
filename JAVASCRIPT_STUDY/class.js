'use strict';

//object-oriendted programming
//class:template
//object:intance of a class
//JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over protootype-based inheritance

//1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2.Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;//this.age 바로 getter를 호출하게 된다.
    }

    //get age()를 정의하는 순간 this.age는 메모리에 올라가 있는 데이터를 읽어오는것이 아니라
    //  바로 getter를 호출하는것이다.
    //set age()를 정의하는 순간  = age 값을 할당시 바로 메모리에 할당하는것이 아니라
    //  setter를 호출하게 된다.
    //무한반복을 막기위한 getter 와 setter 안에 사용되는 변수를 다른 이름으로 만들어야한다.

    get age(){
        return this.age2;
    }

    set age(value){
        this.age2 = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', 1);
console.log(user1.age);//getter와 setter를 사용하기 때문이다.

//3.Fields (public, private)

class Experiment{
 publicField = 2;
 #privateField = 0;   
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
class Article{
    static publisher = 'Dream Coding';//재정의되도 변하지 않는다.
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
console.log(article1.articleNumber);
Article.printPublisher();

//5. Inheritance 상속
// a way for one class to extend another class.

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw(){
        console.log(`drawing: ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //overriding
    draw(){
        super.draw();//부모의 메소드 사용
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return 'Triangle Class!!';
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true
console.log(triangle.toString());


function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract' :
            return a-b;
        case 'divide' :
            return a/b;
        case 'muliply':
            return a*b;
        case 'remainder':
            return a%b;
        default : 
            throw Error('unkown command');
    }
}
console.log(calculate('', 10, 20));