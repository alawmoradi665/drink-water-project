// Using a class for a tidier syntax when implementing a constructor that takes a 'brand'
class Car {
    constructor(brand) {
    // Setting an instance variable called 'carname'
      this.carname = brand;
    }
    // Creating a method called 'present' that returns a string which picks up the instance variable 'carname' 
    present() {
      return 'I have a ' + this.carname;
    }
  }
  // Creating an inheritence relationship by creating a more specific class 'Model' that extens 'Car'
  class Model extends Car {
    // Creating a constructur that takes two arguments, first one is picked up from the base class
    constructor(brand, mod) {
    // Calling the instance variable 'brand' by calling the super keyword from the base class - instead of repeating that line of code
      super(brand);
      // Setting an instance variable so that the 'Car' class now has a brand and a model
      this.model = mod;
    }
    // Adding a method on to the 'present' method to return both methods in one line by + to separate/add the models 
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
  // Setting a variable to be a variable containing three strings 
  let makes = ["Ford", "Holden", "Toyota"]
  // Setting a variable 
  let models = Array.from(new Array(40), (x,i) => i + 1980)
  
  // Creating a function range that takes two arguments
  function randomIntFromInterval(min,max) { // min and max included
    // Declaring the range to return integers that are in the range that is set 
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  // Setting a for loop 
  for (model of models) {
  
    make = makes[randomIntFromInterval(0,makes.length-1)]
    model = models[randomIntFromInterval(0,makes.length-1)]
    // Creating a variable with the instance variable 'model' that was created in the extended class
    mycar = new Model(make, model);
    // Print 'mycar' variable with the show method that returns a string containing the 'present' method as well
    console.log(mycar.show())
  }








