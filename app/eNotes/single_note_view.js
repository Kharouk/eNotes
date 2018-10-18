class SingleNoteView {
  constructor(message) {
    if (message instanceof Note === false) {
      let note = new Note(message);
      this.note = note;
    } else {
      this.note = note;
    }
  }

  htmlString() {
    return `<div><p>${this.note.getNote()}</p></div>`;
  }
}
