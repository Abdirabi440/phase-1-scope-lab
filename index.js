// Write your solution in this file!


var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBest) {
  bestCustomer = newBest; 
}

const leastFavoriteCustomer = 'Yussuf'; 

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.'); // Throws an error if reassigning
}
