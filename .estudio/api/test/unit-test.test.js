//npm install -D mocha chai | libreria de test
//Test unitarios para comprobar las funciones

//importar las librerias de chai
//usaremos las funcionalidades de assert
const assert = require("chai").assert;

function addValue(a, b) {
  return a + b;
}

//describe para determinar una test suite
describe("Suite de prueba para el curso", () => {
  //comprobar que la funcion debe devolver 2
  it("should return 2", () => {
    let va = addValue(2, 2);
    assert.equal(va, 4);
  });
});
