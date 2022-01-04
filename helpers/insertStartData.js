const noteCollection = require('../collections/note.collection');
const startDataNotes = require('../data/startDataNotes');

module.exports = async () => {
    const notes = await noteCollection.selectAll();

    if (!notes.length) {
        startDataNotes.forEach(note => noteCollection.insert(note));
    }
};
