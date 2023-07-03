// array
let array1 = [1,2,3];
let array2 = [4,5,6];
// Using ES5 JAVASCRIPT
array1 = array1.concat(array2);
console.log(array1) 
// Using ES6
array1 = [...array1, ...array2];
console.log(array1)

// object
const user= {
    name: 'Jhon',
    age: 25
};
let user1= {...user, id:5, name: 'Mohammed'};
console.log(user1);

// array
const tab=[1,3,6,9];
let tab1=[...tab, 56,8];
console.log(tab1);

// another exampl
//const tab=[1,3,6,9];
const t=[9,6,3,5];
let tab2=[...tab,...t];
console.log(tab2);

//array of objects
const users=[{name:'Mohammed'}, {name: 'Salah'}];
const tt=[...users, {name: 'sondes'}];
console.log(tt);
const u=tt.map((el,i)=>{
    return {...el, age: i};
})

console.log(u);
