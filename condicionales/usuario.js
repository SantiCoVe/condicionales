/*1. Un usuario ingresa una contraseña y deseamos verificar si es válida. La contraseña es
válida si tiene al menos 8 caracteres y un máximo de 15 caracteres. La contraseña debe
contener un espacio. Si la contraseña tiene un formato válido, se le debe mostrar al usuario,
sino, también se le debe mostrar un mens*/
let contra= prompt (" Ingrese su contraseña");
if (contra.includes(" ") && (length =>8 && length <=15)){
console.log("La contraseña es válida");
}
else{
    console.log("La contraseña no es válida");
}