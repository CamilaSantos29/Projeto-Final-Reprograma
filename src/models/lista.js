const mongoose = require("mongoose");

const listaSchema = new mongoose.Schema({
  id: { type: String },
  musica: { type: String, required: true },
  cantor: { type: String, required: true },
  aluna: { type: String, required: true },
  });


const lista = mongoose.model('lista', listaSchema);

module.exports = lista;