const sayHi = (name) =>{
    console.log( `Hello ,  my name is ${name} ` );
  }

module.exports = sayHi;   //for a single function,no need for creating object.

//exporting  sayHi function to use in  other files, when necessary
//in this case , the app.js file
