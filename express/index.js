const express = require('express' );

const app = express();

//Simulamos una base de datos con el archivo de cursos.js anterior
const { infoCursos } = require('./cursos.js');

// Loading process.env
require('dotenv').config();

// Routing
app.get('/', (req, res) => {
    res.send('Hello World' )
})

app.get("/cursos/programacion/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    
    const data = infoCursos.programacion.filter(element => element.lenguaje === lenguaje);

    if(data.length === 0) {
        
        res.status(404);
        return res.send("No se encontro " + lenguaje);
    }

    res.send(JSON.stringify(data));
});

// Listening
const port = process.env.PORT || 3000;
app.listen (port, () => {
    console.log('Servidor iniciado en el puerto' , port);
});

