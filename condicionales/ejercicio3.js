/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente compra a crédito, el
valor global del electrodoméstico aumenta en un 25%. Cree un programa que lea del usuario el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre al usuario el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/
const  precio = parseInt(prompt("Ingrese el valor del producto"));
const  plazo = parseInt(prompt("ingrese el plazo para pagar "));

if (plazo>0){
    let precioTotal = (precio*1.25);
    let cuotaMensual = (precioTotal/plazo);
    console.log("El precio del electrodomestico es de",precioTotal);
    console.log("La cuota mensual es de",cuotaMensual);
}