const findDates = require('../helpers/findDates');
const formatDateToUS = require('../helpers/formatDateToUS');

class Note {
    constructor(name, created = '', category, content, archive = 0) {
        this.name = name;
        this.created = formatDateToUS(created);
        this.category = category;
        this.content = content;

        Object.defineProperty(
            this,
            'dates',
            {
                enumerable: true,
                configurable: true,
                get() {
                    if (this.content) {
                        return findDates(this.content);
                    }

                    return '';
                }
            }
        );

        this.archive = archive;
    }
}

module.exports = Note;
