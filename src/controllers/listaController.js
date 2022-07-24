const lista = require ("../models/lista");
const fs = require ("fs");

const getAllLista = (req, res) => {
  lista.find((err, listas) => {
    res.status(200).json(listas);
  })  
};

const getLista = (req, res) => {
  const id = req.params.id;

  lista.findById(id, (err, lista) => {
    if(err) {
      res.status(400).send({message: `${err.message} - id da lista não encontrado`})
    } else {
      res.status(200).send(lista);
    }
  })
}


const createItem =  (req, res) => {
  let listaMusica = new lista(req.body);

  listaMusica.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar musica`})
    } else {
      res.status(201).send(listaMusica.toJSON())
    }
  })
};


const updateLista =  (req, res) => {
  const id = req.params.id;

  lista.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message:'Item da lista atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteLista =  (req, res) => {
  const id = req.params.id;

  lista.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Item da lista deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

module.exports = {
    getAllLista,
    getLista, 
    createItem,
    updateLista,
    deleteLista
};