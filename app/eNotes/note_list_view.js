class NoteListView {
  viewAll(list = []) {
    let htmlString = "<ul>";
    list.map(item => {
      // prettier-ignore
      let splitItem = item.split("").splice(0, 25).join("");
      htmlString += `<div><li>${splitItem}</li></div>`;
    });
    htmlString += "</ul>";
    return htmlString;
  }
}
