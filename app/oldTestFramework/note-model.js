(function(exports) {
  function Note() {
    this.LIST_OF_NOTES = [];
  }

  Note.prototype.addNote = function(note) {
    this.LIST_OF_NOTES.push(note);
    return note;
  };

  Note.prototype.returnNotes = function() {
    return this.LIST_OF_NOTES;
  };

  Note.prototype.findNote = function(note) {
    let foundNote = "";
    this.LIST_OF_NOTES.forEach(function(compareNote) {
      if (note === compareNote) {
        foundNote = compareNote;
      }
    });
    return foundNote;
  };

  exports.Note = Note;
  // exports.getListOfNotes = returnNotes;
})(this);
