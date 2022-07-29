const express = require("express");
const controller = require("../controllers/listaController.js");
const router = express.Router();

router.get("/allMusics", controller.getAllLista);
router.get("/:id", controller.getLista);
router.post("/createmusic", controller.createItem);
router.put("/updatemusic/:id", controller.updateLista);
router.delete("/deletemusic/:id", controller.deleteLista);


module.exports = router;
