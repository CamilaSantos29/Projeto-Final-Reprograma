const express = require ("express");
const app = express();
require('dotenv-safe').config();
const cors = require("cors");
const index = require ("./routes/index"); 
const lista = require ("./routes/lista");
const mongoose = require("./database/mongooseConnect")
const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use(express.json());
app.use(cors());
app.use("/", index);
app.use("/", lista);
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connect()

module.exports = app;