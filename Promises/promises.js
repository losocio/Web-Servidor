let products = [
    {
        nombre: "PC-Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Cámara-Reflex",
        marca: "Canon",
        precio: 650
    }
]

const getProducto = (producto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8){ 
                resolve(producto);
            }
            else{
                reject(new Error("Error al hacer Pizza"));
            }
        }, 2000);
    });
}

getProducto("Pizza BBQ")
    .then((resolution) => {console.log(resolution)})
    .catch((rejection) => {console.log(rejection.message)})

/*
async function getPizza(pizza){

    try{
        let producto = await getProducto("Pizza " + pizza);
        console.log(producto);
    }
    catch(err){
        console.log(err.message);
    }
}

getPizza("peperino");
*/