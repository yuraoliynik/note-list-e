const databaseService = require('../services/database.service');

const collection = databaseService.createCollection('note');

module.exports = collection;
