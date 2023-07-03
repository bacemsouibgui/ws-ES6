//spreading & destructuring
//destructuring
/*let introduction=["Hello", "I", "am", "Sarah"];
let greeting= introduction[0]; // Hello
let name= introduction[3] // Sarah
console.log(greeting);
console.log(name);

//skipping items in an array
let [great,pronoun ]= introduction;
console.log(great);
console.log(pronoun);
// skipping items
let [greatt,,,namee]=["Hello", "I", "am", "Sarah"];
console.log(greatt);
console.log(name)
//
let [, pronounn,,nameee]=["Hello", "I", "am", "Sarah"];
console.log(pronounn);
console.log(nameee);*/

// object
let person={name:"Sarah", country: "Tunisia", job: "Developer"};
//let name= person.name;
//let country= person.country;
//let job= person.job;
//console.log(name);
//console.log(country);
//console.log(job);

let {name, country, job}= {name:"Sarah", country: "Tunisia", job: "Developer"};
console.log(name);
console.log(country);
console.log(job);

// another exampl
//object
let user={
    name: 'mohammed',
    age: 24,
    address: {
        city: "cite el khadhra",
        cp: 1400
    }
}

let func=(userr)=> {
  
    return `my name is ${user.name}, and I am ${user.age} and I live in ${user.address.city}`
}
console.log(func(user));

// destructuring user

let f=({name, age, address: {city, cp}})=> {
    
    return `my name is ${name}, and I am ${age} and I live in ${city}: ${cp}`;
}
console.log(f(user));

// destructuring array
let tab=[1, 2, 5];
const [first, second, third]= tab;
console.log(first);
console.log(second);
console.log(third);

// spreading
