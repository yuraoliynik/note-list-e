const noteCollection = require('../collections/note.collection');
const {errorStatuses} = require('../constants');
const {noteService} = require('../services');

module.exports = {
    getAllNotes: async (req, res, next) => {
        try {
            const notes = await noteCollection.selectAll();

            res.json(notes);
        } catch (err) {
            next(err);
        }
    },

    getNoteStats: async (req, res, next) => {
        try {
            const noteStats = await noteService.getNoteStats();

            res.json(noteStats);
        } catch (err) {
            next(err);
        }
    },

    getNoteById: (req, res, next) => {
        try {
            const {foundNote} = req;

            res.json(foundNote);
        } catch (err) {
            next(err);
        }
    },

    createNote: async (req, res, next) => {
        try {
            const {body} = req;

            const createdNote = await noteCollection.insert(body);

            res
                .status(errorStatuses.code_201)
                .json(createdNote);
        } catch (err) {
            next(err);
        }
    },

    updateNote: async (req, res, next) => {
        try {
            const {
                params: {id},
                body
            } = req;

            const updatedNote = await noteCollection.updateById(id, body);

            res
                .status(errorStatuses.code_201)
                .json(updatedNote);
        } catch (err) {
            next(err);
        }
    },

    deleteNote: async (req, res, next) => {
        try {
            const {params: {id}} = req;

            await noteCollection.deleteById(id);

            res.sendStatus(errorStatuses.code_204);
        } catch (err) {
            next(err);
        }
    }
};
