'use strict';

// async & await
// clear style of using promise :)

// 1. async - promise 처럼 사용이 가능하다.
async function fetchUser(){
    //return new Promise((resolve, reject) => {
    //    //do network request in 10 sec...
    //    resolve( 'ellie');
    //});
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2.  await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000); // await delay가 끝날때 까지 기다려준다.
    return '사과';
}

async function getBanana(){
    await delay(3000);
    return '바나나';
}

// function pickFruits(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits(){
    const applePromis =  getApple();  //바로 실행 : 병렬 실행
    const bananaPromis =  getBanana();//바로 실행 : 병렬 실행
    const apple = await applePromis;
    const banana = await bananaPromis;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. usefull Promis APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(` + `)

    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);