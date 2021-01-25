const chai = require("chai");

//plugin de chai
//le da funcionalidades a chai para levantar servidores y poder hacer llamandas
//http sobre estos servidores

//npm install -D chai-http
const chaiHttp = require("chai-http");

//le decimos a chai que vamos a usar el plugin
chai.use(chaiHttp);

//acceso a los endpoints
//importar objeto app
const app = require("../app").app;

//definir test de integracion con describe
describe("suite de prueba e2e para el curso", () => {
  //comprobar si nos retorna la respuesta del endpoint hello-world
  it("should return hello world", (done) => {
    //usar nuestro servidor app
    chai
      .request(app)
      //hacer esta llamanda al servidor
      .get("/")
      .end((err, res) => {
        //response es el texto que me ha devuelto el resultado sea Hello World!
        chai.assert.equal(res.text, "Hello World!");
        done();
      });
  });
});
