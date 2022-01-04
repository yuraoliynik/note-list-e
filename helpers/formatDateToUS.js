function formatDateToUS(dateStr) {
    let formatDate;

    if (dateStr) {
        formatDate = new Date(dateStr);
    }

    if (!dateStr) {
        formatDate = new Date();
    }

    return new Intl.DateTimeFormat(
        'en-US',
        {
            month: 'short',
            year: 'numeric',
            day: 'numeric'
        })
        .format(formatDate);
}

module.exports = formatDateToUS;
