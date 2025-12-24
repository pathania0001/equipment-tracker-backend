// src/config/constants.js

const EQUIPMENT_TYPES = ['Machine', 'Vessel', 'Tank', 'Mixer'];

const EQUIPMENT_STATUSES = ['Active', 'Inactive', 'Under Maintenance'];


const ERROR_MESSAGES = {
  EQUIPMENT_NOT_FOUND: 'Equipment not found',
  INVALID_ID: 'Invalid equipment ID',
  VALIDATION_ERROR: 'Validation error',
  DATABASE_ERROR: 'Database operation failed',
  INTERNAL_ERROR: 'Internal server error',
};

const SUCCESS_MESSAGES = {
  EQUIPMENT_CREATED: 'Equipment created successfully',
  EQUIPMENT_UPDATED: 'Equipment updated successfully',
  EQUIPMENT_DELETED: 'Equipment deleted successfully',
  EQUIPMENT_FETCHED: 'Equipment fetched successfully',
};

module.exports = {
  EQUIPMENT_TYPES,
  EQUIPMENT_STATUSES,
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};