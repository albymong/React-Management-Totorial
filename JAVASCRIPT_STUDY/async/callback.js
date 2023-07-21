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
    loginUser(id, passwrod, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(id === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }else{
                onError(new Error('not access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error);
    }
)