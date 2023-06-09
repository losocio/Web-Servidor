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
            if(false){ // Math.random() < 0.8
                resolve(producto);
            }
            else{
                reject(new Error("Error al hacer Pizza"));
            }
        }, 1500);
    });
}

/*
getProducto("Pizza BBQ")
    .then((resolution) => {console.log(resolution)})
    .catch((rejection) => {console.log(rejection.message)})
*/

async function getPizza(pizza){

    try{
        console.log("try PREWAIT");
        var klk = await getProducto(pizza); 
        console.log(klk + "POSTWAIT");
        //return klk; // This will just return the promise object. program doesnt stop to wait
    }
    catch(err){
        console.log("catch");
        console.log(err.message);
    }
}

// Here that "var fin =" does NOT wait for the promise to be fullied, it gets the Promise object. The program execution does not stop
var fin = getPizza("peperino");
console.log("FIN"+fin); 
