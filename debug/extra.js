let mensaje = "Debugeando codigo";

function saludar() {
    debugger;
    console.log(mensaje)
}

module.exports = {mensaje:saludar}