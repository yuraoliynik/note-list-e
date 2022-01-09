const yup = require('yup');

const {noteCategoryNames} = require('../constants');

const name = yup
    .string()
    .trim();

const created = yup
    .date();

const category = yup
    .string()
    .oneOf(Object.values(noteCategoryNames));

const content = yup
    .string();

const archive = yup
    .number()
    .oneOf([
        0,
        1
    ]);

const noteCreateValidator = yup.object({
    name: name.default(''),
    created: created.required(),
    category: category.required(),
    content: content.default(''),
    archive: archive.default(0)
});

const noteUpdateValidator = yup.object({
    name,
    created,
    category,
    content,
    archive
});

module.exports = {
    noteCreateValidator,
    noteUpdateValidator
};
