
function tablaMultiplicar(number) {
   return function () {
      for (let i = 1; i <= 12; i++) {
         console.log(`${number} x ${i}: ${number * i}`);
      }
   }
}

let tabla = tablaMultiplicar(9);
tabla()
