const CrudRepository = require('./CrudRepository');
const Equipment = require('../models/Equipment.model');

class EquipmentRepository extends CrudRepository {
  constructor() {
    super(Equipment);
  }
}

module.exports = new EquipmentRepository();
