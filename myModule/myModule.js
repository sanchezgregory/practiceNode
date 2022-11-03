// Solo se exporta lo que se le asigna a module.exports

const address = "hola.com";
const name = "Gregory Sanchez";
const date = "27/10/2023";
const data = { add: "Av Rivadavia", num: 2057 };

// normal form
const userData = {
  address: address,
  name: name,
  date: date,
  data: data,
};
module.exports = userData;

// shorter
const userData2 = {
  address,
  name,
  date,
  data,
};
module.exports = userData2;

// the shortest
module.exports = { address, name, date, data };

// Tambien se puede asignar atributos al objeto module.exports pero es mejor como esta arriba
module.exports.name = name;
module.exports.address = address;

// Si se recibe un solo parametro, se puede prescindir de parentesis
// si es una sola sentencia no necesitas llaves y se puede escribir en la misma linea, y tampoco se necesita el return
const f1 = a => a + 40;

module.exports.f1 = f1;