const barracuda = Barracuda;

barracuda.describe(
  "Check to see if notes class exists",
  barracuda.expect(typeof Note).toEqual("function")
);
barracuda.describe(
  "test to see if you can successfully add a note",
  function() {
    const newNote = new Note("hello");
    barracuda.expect(newNote.note).toEqual("hello");
  }
);
