const fs = require('fs');

// param1 path, param2 data, param3 callback
fs.appendFile('./asd.txt', 'hello world', error => {
    if(error) {
        console.log('error en file system')
    } else {
        console.log("\nFile Contents of file after append:");
    }
});

fs.readFile('./asd.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(`hubo un error: ${error}`);
    } else {
        console.log(data)
    }
})

