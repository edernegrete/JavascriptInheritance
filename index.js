// base object with methods including initialization
const Vehicle = {
  init: function(name) {
    this.name = name;
  },
  start: function() {
    return `engine of ${this.name} starting...`;
  }
}
// delegation link created between sub object and base object
const Car = Object.create(Vehicle);
// sub object method
Car.run = function() {
  console.log(`Hello ${this.start()}`);
};
// instance object with delegation link point to sub object
const firstInsance = Object.create(Car);
const secondInstance = Object.create(Car);
// Inicial parameters
firstInsance.init('Fiesta');
secondInstance.init('Baleno');
// Run 
firstInsance.run();   // "Hello engine of Fiesta starting..."
secondInstance.run();   // "Hello engine of Baleno starting..."