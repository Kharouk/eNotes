barracuda.describe("Note List", function() {
  barracuda.it("checks it exists", function() {
    barracuda.expect(typeof NoteList).toEqual("function");
  });

  barracuda.it("gives back an array of created notes", function() {
    const Notebook = new NoteList();
    barracuda.expect(Notebook.getList()).isArray();
  });

  barracuda.it("can store instances of Notes", function() {
    const Notebook = new NoteList();
    Notebook.addNote("note");
    Notebook.addNote("anotherNote");
    barracuda.expect(Notebook.getList()).toContain("note");
  });
});
