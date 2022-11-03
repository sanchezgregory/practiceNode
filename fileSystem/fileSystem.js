// Este es un proceso async, se ejecuta primero started, luego finished, y por ultimo el readFile

const fs = require('fs');

console.log('started');

// Create file Sync \n es un salto de linea
fs.appendFileSync('asd.txt', 'qweqe \n qweqwe \n qweqwe');
// Borramos los archivos
fs.unlinkSync('new_asd2.txt', error => {
    if (error) throw error;
    console.log('Eliminado ne_asd2.txt');
})

// Async
fs.readFile('./asd.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('hubo un error')
    } else {
        console.log(`Data Async es: ${data}`);
    }
});


// Sync, no necesita el callback
let data = fs.readFileSync('./asd.txt', 'utf-8')

console.log(`Data Sync es ${data}`);

// Rename Async
fs.rename('asd.txt', 'new_asd.txt', error => {
    if (error) throw error;
    console.log('Renombrado asd.txt a new_asd.txt');
})

// Rename Sync
let newData2 = fs.renameSync('new_asd.txt', 'new_asd2.txt');
console.log(`Renombrado new_asd a new_asd2.txt`);

// Leer y crear nuevo archivo (copiar)
fs.createReadStream('new_asd2.txt').pipe(fs.createWriteStream('data.txt'));

// Leer el contenido de un directorio
console.log(__dirname);
fs.readdir('./../../', (error, files) => {
    if(error) {
        console.log(`Error: ${error}`);
    }
    files.forEach(file => {
         console.log(file)
    })
});
console.log('finished');