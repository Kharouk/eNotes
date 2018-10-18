barracuda.describe("NoteListView", function() {
  barracuda.it("able to make a complete list into html", function() {
    var noteListView = new NoteListView();
    var message = "message";
    var msg2 = "hi";
    htmlString = `<ul><div><li>${message}</li></div></ul>`;
    htmlString2 = `<ul><div><li>${message}</li></div><div><li>${msg2}</li></div></ul>`;
    barracuda.expect(noteListView.viewAll([message])).toEqual(htmlString);
    barracuda
      .expect(noteListView.viewAll([message, msg2]))
      .toEqual(htmlString2);
  });

  barracuda.it("Nothing is passed into viewAll", function() {
    htmlString = `<ul></ul>`;
    let noteListView = new NoteListView();
    barracuda.expect(noteListView.viewAll()).toEqual(htmlString);
  });

  barracuda.it("expect the 25 character limit to be in effect", function() {
    htmlString = `<ul><div><li>1234567891011121314151617</li></div></ul>`;
    message = "12345678910111213141516171415";
    let view = new NoteListView();
    barracuda.expect(view.viewAll([message])).toEqual(htmlString);
  });
});
