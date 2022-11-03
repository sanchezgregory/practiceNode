// si no agrego ./ en el require, node primero busca ese modulo en el directorio del programa, si no lo consigue, lo busca en los modulos preinstalados
const os = require('os');

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

console.table({
    os: os.platform,
    version: os.release(),
    totalMemory: os.totalmem()
})