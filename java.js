
let carrito= 0;

function comprar(){
    return new Promise((resolve,reject)=>{
       
        let random = Math.round(Math.random()*100);

            console.log("Procesando compra...");
            setTimeout(()=>{
                carrito+=1;
                console.log("Compra procesada");
                console.log(`carrito: ${carrito}` );

                resolve(carrito);
            },2000)
        

    })
}

comprar()

 .then(()=>comprar())
 .then(()=>comprar())
 .then(()=>comprar())



.catch(error => console.log(error));

