// todos los require necesarios para q funcione EXPRESS, CORS, COOIKE-PARSER, BASE64
// crypto viene ya incluido en npm, y bodyparse convierte los json en datos y al reves
// const { parse } = require("path"); ?? esto no se q hace

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const base64 = require("base-64");
const crypto = require("crypto");
const { parse } = require("path");

//Variables globales
// const SECRET = crypto.randomBytes(2048).toString("hex");
const SECRET = "a71055aead06d48b1ac125ce02f49a73";

//Inicialición de express
const PORT = 8080;
const server = express();

//Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());

// Funciones

////////////

// Endpoints para poner en funcionamiento front con back ( server.js ) y desde ahi mandarlo a BBDD o lo q haga falta

server.listen(PORT, () => console.log("http://localhost" + PORT));