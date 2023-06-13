const http = require("http");
const cursos = require("./cursos");
// Puede que haga falta? const { stringify } = require("querystring");

/*
    Se crea un servidor HTTP, este tiene Request (req) y Response (res)
    Segun el Rquest recibido, se devuelve una respuesta u otra


*/



// Creo servidor
const servidorHTTP = http.createServer((req, res) => {

    switch(req.method) { // Segun el tipo de solicitud se maneja de una forma u otra
        case "GET":
            manejarGET(req, res);
            break;
        case "POST":
            manejarPOST(req, res);
            break;
        default: // Si no esta implementado
            res.statusCode = 501; // No implementado
            res.end("El método " + req.method + " no puede ser manejado por el servidor");
    }
});

const manejarGET = (req, res) => {
    const path = req.url; // URL de donde viene el Request

    switch(path){
        case "/":
            return res.end("Bienvenido al primer servidor");
        case "/cursos":
            return res.end(JSON.stringify(cursos.infoCursos));
        case '/cursos/programacion':
            return res.end(JSON.stringify(cursos.infoCursos.programacion));
        case '/cursos/matematicas':
            return res.end(JSON.stringify(cursos.infoCursos.matematicas));
        default:
            res.statusCode = 404;
            return res.end("404: Recurso no encontrado");
    }
}

const manejarPOST = (req, res) => {
    const path = req.url;
    
    switch(path){
        case "/cursos/programacion":
        case "/cursos/matematicas":
            let body = '';
            // req y res no son, pero se comportan como Eventos (EventEmmitrer)
            req.on('data', (data) => { // El evento 'data' ya viene predefinido, y se emite cuando llegan los datos
                body += data.toString();
            }); 

            let test = req.on('end', () => { // El evento 'end' ya viene predefinido y se emite cuando se termina de recibir la información
                console.log(typeof body, body);
                body = JSON.parse(body); // Desde un JSON de tipo STRING a un JSON de tipo objeto de JS.
                console.log(typeof body, body.titulo); 
                return res.end('El servidor recibió una solicitud POST para ' + path);

            });
            break;
        default:
            res.statusCode = 404;
            return res.end("No existe el curso indicado " + path)
    }
}

// Hago que el servidor escuche en el puerto 3000
const port = 3000;
servidorHTTP.listen(port, () => {
    console.log('Servidor escuchando en el puerto' + port);
})