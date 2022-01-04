const noteCollection = require('../collections/note.collection');
const startDataNotes = require('../data/startDataNotes');

module.exports = async () => {
    const notes = await noteCollection.selectAll();

    if (!notes.length) {
        for(let i = 0; i < startDataNotes.length; ++i) {
            await noteCollection.insert(startDataNotes[i]);
        }
    }
};
