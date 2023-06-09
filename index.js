const EventEmmitter = require("events"); //devuelve una clase, por eso la E mayuscula
const emisorProductos = new EventEmitter();
emisorProductos.on("eventName", () => {});
//Podemos emitir el evento donde lo necesitemos con
emisorProductos.emit("eventName");

