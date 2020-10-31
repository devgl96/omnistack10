const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

// Aplicação Criada
const app = express();
const server = http.Server(app);

setupWebsocket(server);

// Conectar ao Banco MongoDB
mongoose.connect(
  "mongodb+srv://omnistack10:omnistack10@cluster0-7vgbf.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Usar o CORS
app.use(cors());

// Requisições corpo no formato JSON
app.use(express.json());

// Utilizar as rotas
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:

// Query Params: request.query (Filtos, Ordenação, Paginação, ...) [GET]
// Route Params: request.params (Identificar um recurso na alteração ou remoção) [PUT, DELETE]
// Body: request.body (Dados para criação ou alteração de um registro) [POST]

// MongoDB (Não-Relacional)
/*
app.post("/users", (request, response) => {
  // console.log(request.query); // [GET]
  // console.log(request.params); // [PUT or DELETE]
  console.log(request.body);

  return response.json({
    message: "Hello Omnistack"
  });
});*/

// Listen the port 3333
server.listen(3333);
