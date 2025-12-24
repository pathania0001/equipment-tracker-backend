const { StatusCodes } = require("http-status-codes");
const EquipmentService = require("../services/EquipmentService");
const ApiResponse = require("../utils/ApiResponse");

const getAllEquipment = async (req, res) => {
  try {
    const equipment = await EquipmentService.getAllEquipment();
    return ApiResponse.success(equipment, "Equipment fetched successfully").send(res);
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await EquipmentService.getEquipmentById(req.params.id);
    return ApiResponse.success(equipment, "Equipment fetched successfully").send(res);
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

const createEquipment = async (req, res) => {
  try {
    const equipment = await EquipmentService.createEquipment(req.body);
    return ApiResponse.created(equipment, "Equipment created successfully").send(res);
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

const updateEquipment = async (req, res) => {
  try {
    const equipment = await EquipmentService.updateEquipment(req.params.id, req.body);
    return ApiResponse.success(equipment, "Equipment updated successfully").send(res);
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

const deleteEquipment = async (req, res) => {
  try {
    const deleted = await EquipmentService.deleteEquipment(req.params.id);
    return ApiResponse.success(deleted, "Equipment deleted successfully").send(res);
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
