// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = '';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'disliked customer';
}