const router = require('express').Router();

const noteController = require('../controllers/note.controller');
const noteMiddleware = require('../middlwares/note.middleware');

router.get(
    '',
    noteController.getAllNotes
);
router.post(
    '',
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
    noteMiddleware.isIdExist,
    noteController.updateNote
);
router.delete(
    '/:id',
    noteMiddleware.isIdExist,
    noteController.deleteNote
);


module.exports = router;
