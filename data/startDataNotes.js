const {noteCategoryNames} = require('../constants');
const Note = require('../classes/Note');

module.exports = [
    new Note(
        'Shopping list',
        '2021-04-20',
        noteCategoryNames.TASK,
        ''
    ),

    new Note(
        'New future',
        '2021-04-27',
        noteCategoryNames.IDEA,
        ''
    ),

    new Note(
        'The theory of evolution',
        '2021-05-05',
        noteCategoryNames.RANDOM_THOUGHT,
        'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021'
    ),

    new Note(
        'William Gaddis',
        '2021-05-07',
        noteCategoryNames.TASK,
        ''
    ),

    new Note(
        'Books',
        '2021-05-15',
        noteCategoryNames.TASK,
        '',
        1
    ),

    new Note(
        'Some idea',
        '2021-09-21',
        noteCategoryNames.IDEA,
        ''
    ),

    new Note(
        'New project',
        '2021-10-18',
        noteCategoryNames.RANDOM_THOUGHT,
        '',
        1
    )
];
