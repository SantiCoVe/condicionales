let numeroUno=prompt("Ingrese el primer numero")
let numeroDos=prompt("Ingrese el segundo numero")
let numeroRes=parseFloat(numeroUno)
let numeroDosRes= parseFloat(numeroDos)
if(numeroRes%numeroDosRes==0){
console.log(numeroRes,"Es multiplo de" ,numeroDosRes)
}
else{
    console.log("No es par")
}