const mongoose = require('mongoose');
const Database = require('../configs/db');
const Equipment = require('../models/Equipment.model');

const EQUIPMENT_TYPES = ['Machine', 'Vessel', 'Tank', 'Mixer'];
const EQUIPMENT_STATUSES = ['Active', 'Inactive', 'Under Maintenance'];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateEquipmentData = (count = 10) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      name: `Equipment ${i}`,
      type: getRandomItem(EQUIPMENT_TYPES),
      status: getRandomItem(EQUIPMENT_STATUSES),
      lastCleaned: getRandomDate(new Date(2025, 0, 1), new Date())
    });
  }
  return data;
};

const seedEquipment = async () => {
  try {
    await Database.connect();

    await Equipment.deleteMany({}); 

    const equipmentData = generateEquipmentData(15); 
    const created = await Equipment.insertMany(equipmentData);

    console.log(`${created.length} equipment items seeded successfully!`);
    await Database.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    await Database.disconnect();
    process.exit(1);
  }
};

seedEquipment();
