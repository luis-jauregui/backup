let numeros = [5, 10, 7, 9, 13];


function calcularResultado(vectorNumeros, numero) {

   for (let i = 0; i < vectorNumeros.length; i++) {
      vectorNumeros[i] *= numero;
   }

   return vectorNumeros
}

console.log(calcularResultado(numeros, 2))

