const { StatusCodes } = require("http-status-codes");
const ApiError = require("../utils/ApiError");
const equipmentRepository = require("../repositories/EquipmentRepository");

const createEquipment = async (data) => {
  try {
    return await equipmentRepository.create(data);
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new ApiError(StatusCodes.BAD_REQUEST, error.message);
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot create equipment");
  }
};

const getAllEquipment = async () => {
  try {
    return await equipmentRepository.findAll();
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot fetch equipment");
  }
};

const getEquipmentById = async (id) => {
  try {
    return await equipmentRepository.findById(id);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Equipment not found");
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot fetch equipment");
  }
};

const updateEquipment = async (id, data) => {
  try {
    return await equipmentRepository.update(id, data);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Equipment not found");
    }
    if (error.name === "ValidationError") {
      throw new ApiError(StatusCodes.BAD_REQUEST, error.message);
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot update equipment");
  }
};

const deleteEquipment = async (id) => {
  try {
    return await equipmentRepository.delete(id);
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Equipment not found");
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Cannot delete equipment");
  }
};

module.exports = {
  createEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment,
};
