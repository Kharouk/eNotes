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

displayNotes = element => {
  const view = new NoteListView();
  const list = new NoteList();
  if (element) {
    list.addNote(element);
  }
  list.addNote(
    "Hello World Hello World .Hello WorldHello WorldHello WorldHello World"
  );
  list.addNote("Bye World");
  const notes = view.viewAll(list.getList());
  return notes;
};

let element = document.querySelector(".multi-note");
element.innerHTML = displayNotes();

addToList = () => {
  let input = document.querySelector("#actualNewNote").value;
  insertIntoExistence(input);
};

insertIntoExistence = element => {
  const view = new NoteListView();
  const list = new NoteList();
  list.addNote(element);
  element.innerHTML = element;
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
