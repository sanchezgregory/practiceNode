// importa solo algunos atributos del objeto que se ha exportado en myModule.js
const { address, name } = require("./myModule/myModule");
console.log(address)

// importa el objeto entero
const  data = require('./myModule/myModule');
console.log(data);


const math = require('./math/index');
console.log(math)

console.log(math.add(5,4))
console.log(math.divide(20,10))

console.log(data.f1(20))
