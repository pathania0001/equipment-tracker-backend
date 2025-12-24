const mongoose = require("mongoose");
const { EQUIPMENT_TYPES, EQUIPMENT_STATUSES } = require("../config/constants");

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: EQUIPMENT_TYPES,
    required: true,
  },
  status: {
    type: String,
    enum: EQUIPMENT_STATUSES,
    default: "Active",
  },
  lastCleaned: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
