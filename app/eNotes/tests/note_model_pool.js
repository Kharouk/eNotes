const barracuda = Barracuda;

barracuda.describe("Notes Class", function() {
  barracuda.it("check to see if it exists", function() {
    barracuda.expect(typeof Note).toEqual("function");
  });

  barracuda.it("has a unique Id", function() {
    const note = new Note("hey");
    const note2 = new Note("yooo");
    barracuda.expect(note.id).toEqual(0);
    barracuda.expect(note2.id).toEqual(1);
  });

  barracuda.it("can get the note", function() {
    const newNote = new Note("test");
    barracuda.expect(newNote.getNote()).toEqual("test");
  });

  barracuda.it("doesn't get the info wrong", function() {
    const newNote = new Note("hi");
    barracuda
      .expect(newNote.getNote())
      .not()
      .toEqual("bye");
  });
});
