// src/routes/equipment.routes.js
const express = require("express");
const router = express.Router();
const EquipmentController = require("../controllers/Equipment.controller");
const validateEquipmentData = require("../middlewares/equipmentValidator");

router.get("/", EquipmentController.getAllEquipment);
router.get("/:id", EquipmentController.getEquipmentById);
router.post("/", validateEquipmentData, EquipmentController.createEquipment);
router.put("/:id", validateEquipmentData, EquipmentController.updateEquipment);
router.delete("/:id", EquipmentController.deleteEquipment);

module.exports = router;
