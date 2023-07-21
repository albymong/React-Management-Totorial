'use strict';

//JavaScript is synchronous.
//Execute the code block by orger after hoisting.
//hoisting
// : var, function declaration => 가장상위로로 올라가고 코드가 나타나는 순서대로 
//   자동적으로 실행된다.

console.log('1');
setTimeout(function(){
    console.log('2');
},1000);
setTimeout(() =>  console.log('2'),1000);
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() =>  console.log('printImmediately'));

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() =>  console.log('printWithDelay'), 2000);

//Callback Hell example
//가독성이 떨어 진다.
class UserStorage{
    loginUser(id, passwrod){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(id === 'ellie'){
                    resolve({name:'ellie', role:'admin'});
                }else{
                    reject(new Error('not access'));
                }
            },1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
