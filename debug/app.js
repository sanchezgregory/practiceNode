// Se debugea con node inspect path/file.js
// Se detiene el puntero en la primera linea de codigo en tiempo de ejecución, y se adelanta en la siguiente line, con la letra n
// Cuando se quiera saber el contenido de alguna variable que ya se haya ejecutado, se escribe repl + enter, y luego el nombre de la variable = enter
// Se presiona ctrl + c para salir de repl
// Se presiona la letra c para ejecutar hasta el final.
// estando dentro de inspect debug> el comando list(10) "ves hasta las proximas 10 lineas de codigo en adelante"
// Para crear un breakpoint escribimos debugger en cualquier punto del programa, y presionano la letra c, nos posicionaes directo ahí

// Tambien se puede usar chrome devTools. chrome://inspect
//  en la terminal, para usar chrome DevTools, node --inspect-brk path/file
// y automaticamente debe salir en la pag devtools de chrome
// y luego debe hacer click en Open dedicated DevTools for Node (en chrome)

let curso = "node...";
curso = "node.js";
debugger;
curso = "tuto.js tutos ";

console.log(curso);

let x = () => {return 1+1};

console.log(x())

// Importamos extra.js
let extra = require('./extra');
console.log(extra.mensaje())