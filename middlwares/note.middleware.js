const noteCollection = require('../collections/note.collection');
const {
    errorMessages,
    errorStatuses
} = require('../constants');

module.exports = {
    isIdExist: async (req, res, next) => {
        try {
            const {params: {id}} = req;

            const foundNote = await noteCollection.selectById(id);

            if (!foundNote) {
                return next(
                    {
                        message: errorMessages.NOTE_ID_DOESNT_EXIST,
                        status: errorStatuses.code_404
                    }
                );
            }

            req.foundNote = foundNote;

            next();
        } catch (err) {
            next(err);
        }
    }
};
