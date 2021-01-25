
//funciones

nombreCompleto('luis', 'jauregui')

function nombreCompleto(nombre, apellido) {
   console.log(nombre, apellido);
}

//funciones expresivas

let fnNombre = function (nombre, edad) {
   return `${nombre}, ${edad}`
}

console.log(fnNombre('enrique', 'vera'))


//funciones de primera clase

function calcularEdad(fechaNacimiento) {
   return 2021 - fechaNacimiento;
}

function documentoDeIdentidad(nombre, apellido, fechaNacimiento) {
   return `${nombre} ${apellido}, ${fechaNacimiento}`
}

//pasar una una funcion como argumento a otra funcion
//callback function
console.log(documentoDeIdentidad('luis', 'apellido', calcularEdad(1998)))
