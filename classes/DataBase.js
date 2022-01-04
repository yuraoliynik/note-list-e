const fs = require('fs');

const Collection = require('./Collection');

class DataBase {
    constructor(dbDirPath) {
        this.dbDirPath = dbDirPath;
    }

    createCollection(collectionName) {
        const newCollection = new Collection(this.dbDirPath, collectionName);

        const startData = JSON.stringify([]);

        const isFileExist = fs.existsSync(newCollection.filePath);

        if (!isFileExist) {
            fs.writeFileSync(newCollection.filePath, startData);
        }

        newCollection.setStartId();

        this[collectionName] = newCollection;

        return newCollection;
    }
}

module.exports = DataBase;
