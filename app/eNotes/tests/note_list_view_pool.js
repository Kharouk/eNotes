// barracuda.describe("NoteListView", function() {
//   barracuda.it("able to make a complete list into html", function() {
//     var noteListView = new NoteListView();
//     var message = {
//       id: 0,
//       note: "message"
//     };
//     var msg2 = "hi";
//     htmlString = `<ul><div><li>${message.note}</li></div></ul>`;
//     htmlString2 = `<ul><div><li>${message}</li></div><div><li>${msg2}</li></div></ul>`;
//     barracuda.expect(noteListView.viewAll([message.note])).toEqual(htmlString);
//   });

//   barracuda.it("Nothing is passed into viewAll", function() {
//     htmlString = `<ul></ul>`;
//     let noteListView = new NoteListView();
//     barracuda.expect(noteListView.viewAll()).toEqual(htmlString);
//   });

//   barracuda.it("expect the 25 character limit to be in effect", function() {
//     htmlString = `<ul><div><li>1234567891011121314151617</li></div></ul>`;
//     message = "12345678910111213141516171415";
//     let view = new NoteListView();
//     barracuda.expect(view.viewAll([message])).toEqual(htmlString);
//   });
// });
