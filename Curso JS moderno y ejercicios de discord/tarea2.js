//2.1 Programar un algoritmo para calcular el área del círculo.
let radio = 3;

areaCirculo = Math.PI*Math.pow(radio,2);

document.write(`El area del circulo es de ${areaCirculo.toFixed(2)}cm.`) 

//2.2 Hace un programa para encontrar el mayor de tres números.

let numeros = [157,1200,152];

function numMayorArr(nums = []) {
   return Math.max(nums[0],nums[1],nums[2]);
}

console.log(`El mayor es ${numMayorArr(numeros)}.`)