let text = document.querySelector(".greeting");
text.innerText = "Hello!";
text.onclick = function(event) {
  if (text.innerText === "Hello!") {
    text.innerText = "Howdy";
  } else {
    text.innerText = "Hello!";
  }
};

newNote = message => {
  let app = document.querySelector("#app");
  let singleView = new SingleNoteView(message);
  app.innerHTML = singleView.htmlString();
};

saveName = () => {
  let input = document.querySelector("#newNote").value;
  newNote(input);
};

addNote = message => {
  let multipleNotes = document.querySelector();
};

// (exports => {
//   class NoteController {
//     constructor(list) {
//       this.list = new NoteList(list);
//       this.view;
//     }
//   }
//   NoteController.prototype.displayHTML = view => {
//     return view;
//   };

//   NoteController.prototype.add = note => {
//     this.list.addNote(note);
//     let view = new SingleNoteView(note);
//     this.displayHTML(view);
//   };

//   NoteController.prototype.viewAllNotes = () => {
//     this.view = new NoteListView(this.list.getList());
//   };

//   exports.NoteController = NoteController;
// })(this);
