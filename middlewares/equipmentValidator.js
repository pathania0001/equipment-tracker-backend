
const { StatusCodes } = require("http-status-codes");

const validateEquipmentData = (req, res, next) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "All fields are required: name, type, status, lastCleaned",
    });
  }

  next();
};

module.exports = validateEquipmentData;
