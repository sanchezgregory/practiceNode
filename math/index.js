// Primer modulo

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

module.exports = {
    add, subtract,multiply,divide
}

// console.log(add(4,5));
// console.log(subtract(10,5));
// console.log(divide(20,5));
// console.log(multiply(5,5));