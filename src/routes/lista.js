const express = require("express");
const controller = require("../controllers/listaController.js");
const router = express.Router();

router.get("/all", controller.getAllLista);
router.get("/:id", controller.getLista);
router.post("/", controller.createItem);
router.put("/:id", controller.updateLista);
router.delete("/:id", controller.deleteLista);

module.exports = router;
