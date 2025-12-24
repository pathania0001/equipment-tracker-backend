// src/config/database.js
const mongoose = require('mongoose');
const { MONGODB_URI } = require('.');

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      this.connection = await mongoose.connect(MONGODB_URI);
      console.log("MongoDB connected");
      return this.connection;
    } catch (error) {
      console.error("MongoDB connection failed:", error.message);
      throw error;
    }
  }

  async disconnect() {
    if (!this.connection) return;
    await mongoose.connection.close();
    console.log("MongoDB disconnected");
  }

  getConnection() {
    return this.connection;
  }
}

module.exports = new Database();
