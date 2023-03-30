/*Crea un programa que convierta una longitud en una unidad de medida a otra. El programa
debe trabajar con el valor de la longitud, la unidad de medida original y la unidad de medida
de destino. Utiliza switch-case para determinar la unidad de medida original y la unidad de
medida de destino y realizar la conversión correspondiente.*/

let medida1 = parseInt(prompt("ingrese la longitud que quire convertir"))

let medida = prompt("Inrese la unidad de medida")

let select=prompt("ingrese la unidad de medida a la que lo quiere convertir entre estas (metros, centimetros,milimetros o pulgadas)")

if (medida == "metros"){
    if (select == "centimetros")
        sol1 = medida1*100
            console.log ("la medida en centimetros es:",sol1,);

    if (select == "milimetros")
        sol2 = medida1*1000
            console.log ("la medida en milimetros es:",sol2,);

    if (select == "pulgadas")
        sol3 = medida1*39.37
            console.log ("la medida en pulgadas es:",sol3,);
}
if (medida == "centimetros"){
    if (select == "metros")
        sol4 =  medida1/100
            console.log ("la medida en metros es de:",sol4,);

    if (select == "milimetros")
        sol5 = medida1*10
            console.log ("la medida en milimetros es de:",sol5,);

    if (select == "pulgadas")
        sol6 = medida1/2.54
            console.log ("la mediad en pulgadas es de:",sol6,);  
}
if (medida == "milimetros"){
    if (select == "metros")
        sol7 = medida1/1000
            console.log ("la medida en metros es de:",sol7,);

    if (medida == "centimetros")
        sol8 = medida1/10
            console.log ("la medida en centimetros es de:",sol8,);

    if (medida == "pulgadas")
        sol9 = medida1/25.4
            console.log ("la medida en pulgadas es de:",sol9,);
}
if (medida == "pulgadas"){
    if (select == "metros")
        sol10 = medida1/39.37
            console.log ("la medida en metros es de:",sol10,);

    if (select == "centimetros")
        sol11 = medida1*2.54
            console.log ("la medida en metros es de:",sol11,);

    if (select == "milimetros")
        sol12 = medida1*25.4
            console.log ("la medida en metros es de:",sol12,);
}