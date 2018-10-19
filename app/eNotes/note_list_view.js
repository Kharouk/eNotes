class NoteListView {
  viewAll(list = []) {
    let htmlString = "<ul>";
    list.map(item => {
      let el = item.note;
      console.log(typeof el);
      // prettier-ignore
      let splitItem = el.split("").splice(0, 25).join("");
      // prettier-ignore
      htmlString += `<div><li><a href="#${item.id}">${splitItem}</a></li></div>`;
    });
    htmlString += "</ul>";
    return htmlString;
  }
}
