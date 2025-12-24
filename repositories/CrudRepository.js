const {ApiError} = require('../utils');

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async findAll(filter = {}) {
    try {
      return await this.model.find(filter);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async findById(id) {
    try {
      const document = await this.model.findById(id);
      if (!document) throw ApiError.notFound('Record not found');
      return document;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async update(id, data) {
    try {
      const document = await this.model.findByIdAndUpdate(id, data, { new: true });
      if (!document) throw ApiError.notFound('Record not found');
      return document;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(id) {
    try {
      const document = await this.model.findByIdAndDelete(id);
      if (!document) throw ApiError.notFound('Record not found');
      return document;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error instanceof ApiError) return error;

    if (error.name === 'ValidationError') {
      return ApiError.badRequest(error.message);
    }

    if (error.name === 'CastError') {
      return ApiError.badRequest('Invalid ID');
    }

    return ApiError.internal('Database error');
  }
}

module.exports = CrudRepository;
