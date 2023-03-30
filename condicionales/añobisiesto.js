let ano = parseInt(prompt("ingrese el año"))

    if(ano%4 == 0 || ano%400 == 0 && ano%100 != 0){

            console.log("es un año bisiesto")

    }
    else{

            console.log("no es un año bisiesto")

    }
