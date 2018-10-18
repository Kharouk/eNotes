class SingleNoteView {
  constructor(message) {
    let note = new Note(message);
    this.note = [];
    this.note.push(note);
  }

  htmlString() {
    return `<div><p>${this.note[0].getNote()}</p></div>`;
  }
}
