class NoteList {
  constructor() {
    this.list = [];
  }
  getList() {
    return this.list;
  }
  addNote(note) {
    this.list.push(note);
  }
}
