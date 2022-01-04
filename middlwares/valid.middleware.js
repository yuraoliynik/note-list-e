const noteValidator = require('../validators/note.validator');

module.exports = {
    isBodyValidate: async (req, res, next) => {
        try {
            const {body} = req;
            console.log(body);

            const user = await noteValidator.validate(body);
            console.log(user);

        } catch (err) {
            next(err);
        }
    }
};
