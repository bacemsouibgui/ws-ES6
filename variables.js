// let & const
//const==> constante
// let==> to resign a variable

function boucle() {
    for (var i = 0; i < 5; i++) {
        console.log(i); //0--4
        
    }
    console.log(i)// 5
}
console.log(boucle())// undefined

// template literals
let str= 'mohamed';
let age= 26;
let address={
    city:"citee el khadhra",
    cp: 1200,
};
// with javascript
let string="my name is "+str+" and my age is "+age+" and I live in "+address.city;

console.log(string);

// using template literals( with ES6)
let string1= `my name is ${str} and my age is ${age} and I live in ${address.city}`;
console.log(string1);

// Functions
// with javascript
function add(x,y) {
    return x + y;
}
console.log(add(1,2));

// with ES6 (arrow function)
const add1=(x,y)=> {
return x + y;
}
//on peut simplifier lorsqu'on a un seul traitement

const add2=(x,y)=> x+y

console.log(add1(2,4));
console.log(add2(5,7));

// conditions
// ancienne methode if..else
let agee=5;

let test=(n)=> {
if (n<18) {
    return "adol"
    
}
else return "adulte"
};
console.log(test(agee));

// with ES6.. Ternary operator
let test1=(n)=> {
    return n< 18 ? "adol" : "adulte";
}
console.log(test1(40))

// ARRAYS
// For each // comme le for
let names=["mohammed", "ali", "salah"];
console.log(names)
let capital=[];
let x = names.forEach((el)=> {
    let a = el.toUpperCase();
    capital.push(a);
})

console.log(capital);

let numbers =[3, 6, 8, 9, 12]
// create an array with the name double[]
const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]
console.log(people);
// ES6
const showEachOne = name=> people.forEach(person => alert(person.name));
console.log(people);

// filter
// les elements d'indices paire

let number=[1,2,3,5];
let z= number.filter((el,i)=>!(i%2));
console.log(z)

// tableau t les elements impaires
let b = number.filter((e) => e % 2 );
console.log(b);

//
let users=[{name: "bacem"}, {name: "mohammed"}, {name:"wafa"}];
let k = users.filter((el)=>el.name.length<=5);
console.log(k);

//map
let namess=["mohammed", "ali", "salah"];
let a =namess.map((el)=> el.toUpperCase());
console.log(a);
console.log(namess);

// other example
let digits=[1, 2, 3, 5];
// chaque element du tableau =>{key,value}==> num: element du tableau
let v= digits.map((el)=>{
    return {num: el};
})
console.log(v);
console.log(digits)
// extraire les elements  paires

let w= digits.map((el)=>{
    return  (el % 2) ? {num:el} : el;
});
console.log(w);

// les elements d'indice paires {num:el}; les elements d'indices impaire: el;

let c = digits.map((e, i) => {
    return i % 2 ? e : { num: e };
  });
  console.log(c);

  // reduce : tab=> number/ string..
//let digits=[1, 2, 3, 5];

let e= digits.reduce((acc, current)=> acc-current, 0); // 0-1-2-3-5=-11
console.log(e)
console.log(typeof(e));

// another example with strings
//let users=[{name: "bacem"}, {name: "mohammed"}, {name:"wafa"}];

let u = users.reduce((acc, current)=> acc+ current.name, "");
console.log(u);
console.log(typeof(u))

// Every==> reponse boolean
// la methode every() permet de tester si tous les elements du tableau verifient une condition donnee
// example
let fruits=["tomate", "apple", "kiwi"];
let t = fruits.every((el)=>el.length>=4);
console.log(t);

// find
// la methode find() renvoie la valeur du premier element qui repond la condition donnee
//let fruits=["tomate", "apple", "kiwi"];
let i=fruits.find((el)=>el.length!==5);
console.log(i);

//some
//la methode some() teste si au moins un element du tableau verifie la condition
//let fruits=["tomate", "apple", "kiwi"];
let j=fruits.some((el)=>el==="orange");
console.log(j);




