barracuda.describe("Single Note View", function() {
  barracuda.it("exists", function() {
    barracuda.expect(typeof SingleNoteView).toEqual("function");
  });
  barracuda.it(
    "The single note view constructor takes a note model as a parameter.",
    function() {
      const doubleNote = new Shark("note");
      doubleNote.eat("hello");
      let singleNoteView = new SingleNoteView(doubleNote);
      Barracuda.expect(singleNoteView.note).toContain(doubleNote);
    }
  );
});
