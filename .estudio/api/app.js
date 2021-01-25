//CREACION DE API HTTP
//EXPRESS libreria que nos permite desarollar usando el protocolo HTTP

//importar libreria
const express = require("express");

//importar liberia de passport
const passport = require("passport");

//asignar a la variables todos los metodos de la libreria
const app = express();
require("./auth")(passport);

//asignar puerto
const port = 3000;

//definir endpoint '/'
app.get("/", (req, res) => {
  //req es la request (peticion)
  //res es la response (respuesta)
  //console.log(req);

  //enviar datos de vuelta al cliente
  res.status(200).send("Hello World!");
});

app.post("/login", (req, res) => {
  res.status(200).json({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zX5MPQtbjoNAS7rpsx_hI7gqGIlXOQq758dIqyBVxxY",
  });
});

app.get(
  "/team",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).send("hello-world");
  }
);

app.post("/team/pokemons", () => {
  res.status(200).send("hello-world");
});

app.delete("/team/pokemons/:pokeid", () => {
  res.status(200).send("hello-world");
});

//encender / escuchar conexiones al puerto
app.listen(port, () => {
  console.log("Server started at port 3000");
});

//ofrecer objeto a cualquier modulo externo
//exportar objeto
exports.app = app;
