let producto = prompt("Digite el producto que se va comprar");

if(producto == "arroz " || producto== "lentejas"){
    console.log("Este producto no paga iva");
}
else if (producto== "vino" || producto== "crema"){
    console.log("Este producto si paga IVA");
}
else{
    console.log("Este producto no disponible");
}