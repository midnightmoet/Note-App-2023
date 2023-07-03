const btnEl = document.getElementById("btn");

function createNoteEl(id, content){

}

function addNote(){
    // console.log("add note"); // test
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    // console.log(noteObj); // test

    const noteEl = createNoteEl(noteObj.id, noteObj.content)
}


btnEl.addEventListener("click", addNote);