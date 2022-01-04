const path = require('path');
const fsPromises = require('fs/promises');

class Collection {
    constructor(collectionPath, collectionName) {
        this.fileName = `${collectionName}.json`;
        this.filePath = path.join(collectionPath, this.fileName);
        this._id = 0;
    }

    get id() {
        return this._id++;
    }

    async _getData() {
        const data = await fsPromises.readFile(this.filePath);

        return JSON.parse(data.toString());
    }

    _setData(data) {
        const dataString = JSON.stringify(data);

        return fsPromises.writeFile(this.filePath, dataString);
    }

    async selectAll() {
        const dataArr = await this._getData();

        return [...dataArr];
    }

    async selectById(id) {
        const dataArr = await this._getData();

        return dataArr.find(item => item.id === id);
    }

    async insert(dataObject) {
        const dataArr = await this._getData();

        const dataObjectWithId = {...dataObject, id: this.id};

        dataArr.push(dataObjectWithId);

        await this._setData(dataArr);

        return {...dataObjectWithId};
    }

    async updateById(id, propertyDataObject) {
        const dataArr = await this._getData();

        const dataObjectForUpdate = dataArr.find(item => item.id === id);

        Object.assign(dataObjectForUpdate, propertyDataObject);

        return {...dataObjectForUpdate};
    }

    async deleteById(id) {
        const dataArr = await this._getData();

        const newDataArr = dataArr.filter(item => item.id !== id);

        await this._setData(newDataArr);

        return {};
    }
}

module.exports = Collection;
