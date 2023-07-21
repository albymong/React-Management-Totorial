'use strict';

//Promis is a JavaScript object for asynchromous operation.
//state : pending -> fulfilled or rejected
//Producer vs Consumer

//1.Producer
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve,reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something....!!');
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network'));
    },2000);
});

//2. Consumers : then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

//3. Promise chaning
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(1);
    },1000);
});

fetchNumber
.then(num => num * 2) //num : 1
.then(num => num * 3) //num : 2
.then(num => {        //num : 6
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(num -1);
        },1000);
    });
})
.then(num => console.log(num));//num : 5

//4. Error Handing
const getHen = () =>
    new Promise((resolve,reject) => {
        setTimeout(()=>resolve('닭'),1000);
    });
const getEgg = hen =>
    new Promise((resolve,reject) => {
        //setTimeout(()=>resolve(`${hen} => 알`),1000);
        setTimeout(()=>reject(new Error(`error ${hen} => 알`)),1000);
    });
const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(()=>resolve(`${egg} => 프라이`),1000);
    });
/*
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/
//받은값을 다음 함수로 시행히 아래와 같이 생략 가능하다.
getHen()
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);