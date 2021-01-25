const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite de pruebas auth", () => {
  it("should return 401 whe no jwt token is avaiable", (done) => {
    chai
      .request(app)
      .get("/team")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });

  it("should return 200 when jwt is valid", (done) => {
    //cuando la llave no tiene correctamente la llave puesta
    chai
      .request(app)
      .post("/login")
      .end((err, res) => {
        chai
          .request(app)
          .get("/team")
          .set("Authorization", `JWT ${res.body.token}`)
          .end((err, res) => {
            chai.assert.equal(res.statusCode, 200);
            done();
          });
      });
  });
});
