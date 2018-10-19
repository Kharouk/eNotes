barracuda.describe("Note List", function() {
  barracuda.it("The ball rolling test trademarked by laura", function() {
    barracuda.expect(typeof NoteList).toEqual("function");
  });

  barracuda.it("gives back an array of created notes", function() {
    const Notebook = new NoteList();
    barracuda.expect(Notebook.getList()).isArray();
  });

  barracuda.it("can store strings that become notes", function() {
    const Notebook = new NoteList();
    const mockNote = "hello";
    Notebook.addNote(mockNote);
    barracuda.expect(Notebook.getList()[0].note).toEqual("hello");
  });

  barracuda.it("instantiate Notes when adding to notelist", function() {
    const Notebook = new NoteList();
    let note = "Having the time of me life";
    Notebook.addNote(note);
    barracuda
      .expect(Notebook.getList()[0].note)
      .toEqual("Having the time of me life");
  });
});
