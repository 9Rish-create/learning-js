// const user = {
//     name: "john",
//     age:40,
//     isAdmin: true,
//     validEmail: null,
//     profile: {
//         company:"QWE"
//     }
// }
// delete user.age
// user.lastName = "KEF"
// console.log(user)
//  user.name = "Oleg"   
// console.log(user.name)

// function getFullName (){
//     return user.name + ' ' + user.lastName;

// }
// const fullName = getFullName(user);
// console.log(fullName)
// console.log(typeof user.name)

// let counter = 0;
// const b = counter++;
// const a = ++counter;
// console.log(a, b)

// const num = "12"
// console.log(+num + 10)

// \n - перевод строки,
// \r - возврат каретки

// const isAdmin = false;
// const hasEmail = true;
// if (isAdmin && hasEmail){
//     console.log('email.ru')
// }
// if (!isAdmin && hasEmail)
// {
//     console.log('email')
// }
// if (isAdmin || hasEmail){
//     console.log('Что-то одно')
// }

// const a = '4';
// const b = 4;
// if (a === b) {
//     console.log('true')
// }
// if (a == b) {
//     console.log('nice')
// }

// alert("Hello")
// prompt("1")
// confirm("2")

// console.log('log')
// console.warn('warn')
// console.error('error')

// console.log(Math.max(1,2,3,4))

// const a = 5;
// const b = String(5);
// console.log(typeof b)

// const a = 5;
// const b = 4;

// console.log('a: ', a, 'b: ', b)
// if (a < b ){
//     console.log('a < b')
// } else if(a == b){
//     console.log('a == b')
// } else {
//     console.log('Other')
// }

// const a = 7;
// const b = 2;

// let c;

// if (a > b) {
//     c = true;
// } else {
//     c = false
// }

// c = getData(a,b);
// console.log(c)

// function getData (a, b){
//     return a > b ? true: false;
// }

// const a = 2;
// const value = getString(a);

// console.log(value)

// function getString(a) {
//     switch(a) {
//         case 1:
//         case 2:
//             // console.log('Один или Два');
//             // break
//             return 'Один или Два'
//         // default:
//             // console.log('Other')
//            // return "Other"
//     }
//     return "Other"
// }

const name = 'John';

function helloUser() {
    const name = 'Oleg';
    console.log('Hi, ' + name);
}
console.log(name)
helloUser(name);