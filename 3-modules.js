// modules

//Everyfile in node is a module.
const names  =  require('./4-name');  //importing the  files to work.
const sayHi = require('./5-utils');//variable name should be the same function name,
const datas =  require('./6-alternatives'); //importing the files to work.

require('./7-grenede'); //if we have the a  module with function that has been ivoked, it will work without assigning and ivokin the varibale.
//this will print  "the sum is 15."

console.log(datas.items); //prints the array.
console.log(datas.items[0]); //prints the first element in the array
console.log(datas.items[1]); //prints the second element in the array
console.log(datas.singlePerson); //prints the object named singlePerson;
console.log(datas.singlePerson.name); //prints the person  name attribute , ie ryukendo;
console.log(names); //prints the  data in the names variable, that was imported, in this case, the object of names.
console.log(names.dipsan); //prints the name  stored in the variable dipsan;
console.log(names.kakashi); //prints the  name stored in the varibale kakashi;
sayHi('Naruto');
sayHi(names.dipsan);  //accesing the values
sayHi(names.kakashi);//accessing the values from the names.




