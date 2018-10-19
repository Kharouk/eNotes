console.log("running...");
displayNote();
urlDisplayAnimals();

function displayNote() {
  document
    .querySelector("#note-link")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      outputNote();
    });
}

function outputNote() {
  document.querySelector("#note").innerHTML = "<h1>Wow What a Note</h1";
}

function urlDisplayAnimals() {
  window.addEventListener("hashchange", showCatForCurrentPage);
}

function showCatForCurrentPage() {
  showAnimal(getAnimalFromUrl(window.location));
}

function getAnimalFromUrl(location) {
  return location.hash.split("#")[1];
}

function showAnimal(animal) {
  document.getElementById("cat").innerHTML = animal;
}
