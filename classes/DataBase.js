const fs = require('fs');

const Collection = require('./Collection');

class DataBase {
    constructor(dbDirPath) {
        this.dbDirPath = dbDirPath;
    }

    createCollection(collectionName) {
        const newCollection = new Collection(this.dbDirPath, collectionName);

        const startData = JSON.stringify([]);

        fs.writeFileSync(newCollection.filePath, startData);

        this[collectionName] = newCollection;

        return newCollection;
    }
}

module.exports = DataBase;
