class NoteList {
  constructor(item) {
    this.list = [];
  }
  getList() {
    return this.list;
  }
  addNote(message) {
    let note = new Note(message);
    this.list.push(note.getNote());
  }
}
