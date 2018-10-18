barracuda.describe("Single Note View", function() {
  barracuda.it("exists", function() {
    barracuda.expect(typeof SingleNoteView).toEqual("function");
  });
  barracuda.it(
    "The single note view returns a string of that note.",
    function() {
      const doubleNote = "buy groceries";
      let singleNoteView = new SingleNoteView(doubleNote);
      Barracuda.expect(singleNoteView.htmlString()).toEqual(
        "<div><p>buy groceries</p></div>"
      );
    }
  );
});
