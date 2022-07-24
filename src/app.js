const express = require ("express");
const app = express();
require('dotenv-safe').config();
const cors = require("cors");
const index = require ("./routes/index"); 
const lista = require ("./routes/lista");
const mongoose = require("./database/mongooseConnect")
const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(cors());
app.use("/", index);
app.use("/", lista);

app.use("/minha-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongoose.connect()

module.exports = app;