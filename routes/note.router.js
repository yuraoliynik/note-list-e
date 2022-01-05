const router = require('express').Router();

const noteController = require('../controllers/note.controller');
const {noteMiddleware, validMiddleware} = require('../middlwares');
const {
    noteCreateValidator,
    noteUpdateValidator
} = require('../validators/note.validator');

router.get(
    '',
    noteController.getAllNotes
);
router.post(
    '',
    validMiddleware.isBodyValidate(noteCreateValidator),
    noteController.createNote
);

router.get(
    '/stats',
    noteController.getNoteStats
);

router.get(
    '/:id',
    noteMiddleware.isIdExist,
    noteController.getNoteById
);

router.patch(
    '/:id',
    validMiddleware.isBodyValidate(noteUpdateValidator),
    noteMiddleware.isIdExist,
    noteController.updateNote
);
router.delete(
    '/:id',
    noteMiddleware.isIdExist,
    noteController.deleteNote
);

module.exports = router;
