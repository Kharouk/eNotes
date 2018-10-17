const barracuda = Barracuda;

barracuda.describe("Notes Class", function() {
  barracuda.it("check to see if it exists", function() {
    barracuda.expect(typeof Note).toEqual("function");
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
