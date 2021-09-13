// 3.1 Crear una cadena de texto llamada persona con los datos: nombre, apellido paterno, apellido materno, edad y correo (Métodos a practicar: replace, slice, substring, repeat, split, downcase y uppercase)
function modificaPersona(indexModif, modificacion, personaX = [], txtModif) {
   let texto = personaX[indexModif]
   personaX[indexModif] = texto.replace(txtModif, modificacion);
   return personaX;
}
function soloNumEdad(indexModif, personaX = [], digitosEdad) {
   let txt = personaX[indexModif];
   personaX[indexModif] = txt.slice(0, digitosEdad);
   return personaX;
}
function obtenDominioEmail(indexModif, personaX = []) {
   let correo = personaX[indexModif]
   for (let i = 0; i < correo.length; i++) {
      if (correo.substring(i, i + 1) == "@") {
         return correo.substring(i, correo.length)
      }
   }
}
function separaDominioUsuario(indexModif, personaX = []) {
   let txt = personaX[indexModif];
   personaX[indexModif] = txt.split("@");
   return personaX
}
function todoMayus(indexModif, personaX = []) {
   let txt = personaX[indexModif];
   personaX[indexModif] = txt.toUpperCase()
   return personaX
}
function todoMinus(indexModif, personaX = []) {
   let txt = personaX[indexModif];
   personaX[indexModif] = txt.toLowerCase()
   return personaX
}

let persona0 = ["Jorge Luis", "Durán", "Perez", 03 + " años", "godito.potito2018@gmail.com"];
console.log(persona0);

persona0 = modificaPersona(2, "Sánchez", persona0, "Perez");
console.log(persona0);

persona0 = soloNumEdad(3, persona0, 1);
console.log(persona0);

console.log(obtenDominioEmail(4, persona0));

persona0 = separaDominioUsuario(4, persona0);
console.log(persona0);
persona0[4] = "godito.potito2018@gmail.com";

persona0 = todoMayus(0, persona0);
console.log(persona0);

persona0 = todoMinus(0, persona0);
console.log(persona0);
//3.2 Solicitar un número al usuario y multiplicarlo por PI con la libreria Math. (Métodos a practicar: ceil, floor, calcular si el número es mayor o menor que Math.random*100)

let número = parseInt(prompt("Introduce un número para miltiplicarlo por PI.", 0));

document.write(`${número}xPI = ${(número * Math.PI).toFixed(3)}`);

document.write(`<br> Redondeado hacia arriba ${Math.ceil(número * Math.PI)}`);

document.write(`<br> Redondeado hacia abajo ${Math.floor(número * Math.PI)}`);

function mayorDeDos(num1, num2) {
   if (num1 > num2) {
      return num1;
   } else if (num1 === num2) {
      return "Ambos números son iguales";
   } else {
      return num2;
   }
}

aleatorio = Math.floor(Math.random() * 100) + 1;

document.write(` <br> El número mayor (comparado con un aleatorio del 1 al 100 es: ${mayorDeDos(Math.floor(número), aleatorio)})`)

//3.3 Crear el objeto persona y agregar los datos: nombre, apellido paterno, apellido materno, edad y correo (Métodos a practicar: desestructurar, freeze, seal, keys, values, entries, this.)

let persona = {
   nombre: "Luis",
   apellidoPaterno: "Durán",
   apellidoMaterno: "López",
   edad: 25,
   correo: "luisadl591@gmail.com"
}

