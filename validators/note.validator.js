const {object, string, date} = require ('yup');

const {noteCategoryNames} = require('../constants');

const noteValidator = object({
    name: string()
        .trim()
        .required(),

    created: date()
        .default(() => new Date())
        .required(),

    category: string()
        .enum(Object.values(noteCategoryNames))
        .required(),

    content: string()
        .default('')
});

module.exports = noteValidator;

