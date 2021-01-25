//Iterar sobre vectores y objetos

let alumnos = [
  {
    nombre: "luis",
    nota: 20,
  },
  {
    nombre: "jorge",
    nota: 14,
  },
];

let luis = {
  nombre: "luis",
  apellido: "jauregui",
  edad: 22,
};

//for of
for (let alumno of alumnos) {
  console.log(alumno.nombre, alumno.nota);
}

let koyuki = {
  nombre: "koyuki",
  apellido: "zevallos",
  edad: 22,
};

//for in
for (let key in koyuki) {
  console.log(key, koyuki[key]);
}

const luis = {
  nombre: "luis",
  apellido: ,
};
