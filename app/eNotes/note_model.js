(function(exports) {
  let idCounter = 0;
  class Note {
    constructor(note) {
      this.note = note;
      this.id = idCounter++;
    }

    getNote() {
      return this.note;
    }
  }
  exports.Note = Note;
})(this);
