const noteCollection = require('../collections/note.collection');
const {errorStatuses} = require('../constants');
const {noteService} = require('../services');

module.exports = {
    getAllNotes: async (res, req, next) => {
        try {
            const notes = await noteCollection.selectAll();

            res.json(notes);
        } catch (err) {
            next(err);
        }
    },

    getNoteStats: async (res, req, next) => {
        try {
            const noteStats = await noteService.getNoteStats();

            res.json(noteStats);
        } catch (err) {
            next(err);
        }
    },

    getNoteById: (res, req, next) => {
        try {
            const {foundNote} = res;

            req.json(foundNote);
        } catch (err) {
            next(err);
        }
    },

    createNote: async (res, req, next) => {
        try {
            const {body} = res;

            const createdNote = await noteCollection.insert(body);

            res
                .status(errorStatuses.code_201)
                .json(createdNote);
        } catch (err) {
            next(err);
        }
    },

    updateNote: async (res, req, next) => {
        try {
            const {
                params: {id},
                body
            } = res;

            const updatedNote = await noteCollection.updateById(id, body);

            res
                .status(errorStatuses.code_201)
                .json(updatedNote);
        } catch (err) {
            next(err);
        }
    },

    deleteNote: async (res, req, next) => {
        try {
            const {params: {id}} = res;

            await noteCollection.deleteById(id);

            res.sendStatus(errorStatuses.code_204);
        } catch (err) {
            next(err);
        }
    }
};
