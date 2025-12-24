const { StatusCodes } = require("http-status-codes");

class ApiResponse {
  constructor(statusCode, data, message, success = true) {
    this.statusCode = statusCode;
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success(data, message = "Success") {
    return new ApiResponse(StatusCodes.OK, data, message, true);
  }

  static created(data, message = "Created") {
    return new ApiResponse(StatusCodes.CREATED, data, message, true);
  }

  static noContent(message = "No Content") {
    return new ApiResponse(StatusCodes.NO_CONTENT, null, message, true);
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

module.exports = ApiResponse;
