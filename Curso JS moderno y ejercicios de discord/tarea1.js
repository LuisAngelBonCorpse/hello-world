// 1.1 Programar un algoritmo para verificar la mayoría de edad.

let edad = parseInt(prompt("Ingrese su edad:", 0))

function esMayorEdad(edad) {
   if (edad >= 18) {
      console.log(`La edad ingresada (${edad}) alcanza la mayoria de edad.`);
      return true;
   } else {
      console.log(`La edad ingresada (${edad}) no alcanza la mayoria de edad.`);
      return false;
   }
}

console.log(esMayorEdad(edad));

//1.2 Hacer un programa para encontrar el mayor de dos números. (utilizando if)


let num1 = 30, num2 = 30;

function mayorDeDos(num1, num2) {
   if (num1 > num2) {
      return num1;
   } else if (num1 === num2) {
      return "Ambos números son iguales";
   } else {
      return num2;
   }
}

console.log(`El mayor es: ${mayorDeDos(num1, num2)}`)