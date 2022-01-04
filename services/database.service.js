const path = require('path');

const DataBase = require('../classes/DataBase');

const appPath = path.dirname(require.main.filename);

const databasePath = path.join(appPath, 'repositories', 'myDataBase');

const myDataBase = new DataBase(databasePath);

module.exports = myDataBase;
