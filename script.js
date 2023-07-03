const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});


// CREATE NOTE
function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("doubleClick", () => {
    const warning = confirm("Are you sure you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}


// DELETE NOTE
function deleteNote(id, element) {
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes)
    appEl.removeChild(element)
}


// UPDATE NOTE
function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}


// ADD NOTE
function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);

  saveNote(notes);
}


// SAVE NOTE
function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}


// GET NOTE
function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// EVENT LISTENER
btnEl.addEventListener("click", addNote)