let anguloUno= prompt("Ingrese el primer angulo");
let anguloDos= prompt("Ingrese el Segundo angulo");
let anguloTres= prompt("Ingrese el Tercer angulo");
let anguloPrimero= parseFloat(anguloUno)
let anguloSegundo=parseFloat(anguloDos)
let anguloTercero=parseFloat(anguloTres)
const anguloMax=180
if(anguloPrimero+anguloSegundo+anguloTercero==anguloMax){
console.log("Es un triangulo")
}
else{
    console.log("No es un triangulo")
}