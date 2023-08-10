console.log("Bienvenido a la Tarea");
console.log(" ");
console.log("Ejercicio B");
console.log(" ");

for (let index = 1; index <= 10; index++) {
  if (index === 1 || index === 10) {
    console.log("-----------------------------");
  } else {
    console.log("|                           |");
  }
}

console.log(" ");
console.log("Ejercicio A");
console.log(" ");

for (let index = 1; index <= 10; index++) {
  if (index === 1) {
    console.log("             *");
  } else if (index === 2) {
    console.log("           *  * *");
  } else if (index === 3) {
    console.log("         *     *  *");
  } else if (index === 4) {
    console.log("        *       *   *");
  } else if (index === 5) {
    console.log("      *          *    *");
  } else if (index === 6) {
    console.log("     *            *     *");
  } else if (index === 7) {
    console.log("   *               *       *");
  } else if (index === 8) {
    console.log("  *                 *     *");
  } else if (index === 9) {
    console.log(" *                   *  *");
  } else {
    console.log("* * * * * * * * * * * *");
  }
}

/* ejemplo priamide
console.log ("         *      ");
console.log ("        * * *    ");
console.log ("       *   *  *   ");
console.log ("      *     *   * ");
console.log ("     *       *    *");
console.log ("    *         *     *");
console.log ("   *           *      *");
console.log ("  *             *    *");
console.log (" *               * *");
console.log ("* * * * * * * * * *");
*/

console.log(" ");
console.log("Ejercicio C");
console.log(" ");

let valorcarrito = prompt("ingrese el valor de su compra")
valorcarrito = +valorcarrito

//no me funciona distinguir entre numeros
/*if (valorcarrito !== isNaN) {
  alert("bien hecho")
} else {
  alert( "el dato no es valido" )
}*/
const mensaje = "Elija su Metodo de pago"
const metodos = ["E - Efectivo\n", "T - Tarjeta Crédito\n", "MP - Mercado Pago\n", "O - Obra Social\n"
]
/*metodos.forEach((metodo)=>{
  metodo += "\n"
})*/ //no me funciona el forEach
let eleccion = prompt(mensaje + "\n" + metodos)

switch (eleccion.toUpperCase()) {
  case "E":
    alert("Elegiste efectivo el total a pagar es: " + valorcarrito)
    break;
  case "T":
    let eleccioncuotas = prompt("Elije el numero de cuotas:\n" + "3 Cuotas (20% de recargo)\n" + "6 Cuotas (20% de recargo)\n" + 
    "9 Cuotas (25% de recargo)\n" + "12 Cuotas (30% de recargo)\n")
    switch (eleccioncuotas) {
      case "3":
        alert("Total a pagar: " + valorcarrito * 1.2 + "\n En 3 cuotas de: " + valorcarrito * 1.2 / 3 )
        break;
      case "6":
        alert("Total a pagar: " + valorcarrito * 1.2 + "\n En 6 cuotas de: " + valorcarrito * 1.2 / 6 )
        break;
      case "9":
        alert("Total a pagar: " + valorcarrito * 1.25 + "\n En 9 cuotas de: " + valorcarrito * 1.25 / 9 )
        break;
      case "12":
        alert("Total a pagar: " + valorcarrito * 1.3 + "\n En 12 cuotas de: " + valorcarrito * 1.2 / 12 )
        break;
      default:
        alert("Elije un numero de cuotas valido")
        break;
    }
    break;
  case "MP":
    alert("elegiste mp")
    break;
  case "O":
  alert("elegiste obrasocial")
  break;

  default:
    alert("elige una opcion valida")
  break;
}