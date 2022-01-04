const noteCollection = require('../collections/note.collection');
const {noteCategoryNames} = require('../constants');

module.exports = {
    getNoteStats: async () => {
        const noteStats = [];

        const noteCategoryNamesArr = Object.values(noteCategoryNames);
        const notesArray = await noteCollection.selectAll();

        noteCategoryNamesArr.forEach(categoryName => {
            let active = 0;
            let archive = 0;

            notesArray.forEach(noteItem => {
                const categoryKey = noteItem.category === categoryName;
                const archiveKey = noteItem.archive === 0;

                if (categoryKey && archiveKey) {
                    active++;
                }

                if (categoryKey && !archiveKey) {
                    archive++;
                }
            });

            const statsObject = {
                categoryName,
                active,
                archive
            };

            noteStats.push(statsObject);
        });

        return noteStats;
    }
};
