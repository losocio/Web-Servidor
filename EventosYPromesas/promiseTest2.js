var a = 1;
const get_data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(5)}, 2000);
    });
  };

get_data()
    .then((resolved) => {
        a = resolved
        console.log(a)
    })
    console.log(a)