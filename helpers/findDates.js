const dateRegEx = /(\d+\/\d+\/\d+)/g;

function findDates(string) {
    if (!string) {
        return '';
    }

    const date = string.match(dateRegEx);

    if (date) {
        return date.join(', ');
    }

    return '';
}

module.exports = findDates;
