class Note {
    constructor(name, created = '', category, content, archive = 0) {
        this.name = name;
        this.created = new Date(created);
        this.category = category;
        this.content = content;
        this.archive = archive;
    }
}

module.exports = Note;
