class NoteListView {
  viewAll(list = []) {
    let htmlString = "<ul>";
    list.map(item => {
      htmlString += `<div><li>${item}</li></div>`;
    });
    htmlString += "</ul>";
    return htmlString;
  }
}
