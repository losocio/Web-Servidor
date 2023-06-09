const get_data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Es necesario dar una funcion como argumento para que sea ejecutada, otro tipo de expresion solo se evaluaria (ejecutarla sin realizar ningun cambio en memoria)
            // Simulating an error condition
            if (Math.random() < 0.5) { 
                resolve("Resolved"); // resolve() y reject() devuelven su argumento en el .then o el .catch para usarlo como sea necesario
            } else {
                reject("Rejected");
            }
        }, 2000);
    });
};

get_data()
    .then((resolved) => console.log(resolved))
    .catch((rejected) => console.log(rejected));
  