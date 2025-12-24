const { StatusCodes } = require("http-status-codes");

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = 'Bad Request') {
    return new ApiError(StatusCodes.BAD_REQUEST, message);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(StatusCodes.UNAUTHORIZED, message);
  }

  static forbidden(message = 'Forbidden') {
    return new ApiError(StatusCodes.FORBIDDEN, message);
  }

  static notFound(message = 'Not Found') {
    return new ApiError(StatusCodes.NOT_FOUND, message);
  }

  static conflict(message = 'Conflict') {
    return new ApiError(StatusCodes.CONFLICT, message);
  }

  static unprocessableEntity(message = 'Unprocessable Entity') {
    return new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, message);
  }

  static internal(message = 'Internal Server Error') {
    return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

module.exports = ApiError;
