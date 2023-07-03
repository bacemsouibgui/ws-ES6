/*const person={
    talk(){
        console.log(this);
    }

};
console.log(person.talk());
*/
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.fullName();