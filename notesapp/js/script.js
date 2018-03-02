class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      newNote.className = "card";

      let p = document.createElement('p');
      p.innerHTML = title;

      let a = document.createElement('a');
      a.setAttribute("href", "#");
      a.className = "card-remove";
      a.innerHTML= "Remove";
      a.addEventListener('click', this.remove.bind(newNote));

      newNote.appendChild(p);
      newNote.appendChild(a);
      return newNote;
    }
    
    add(){
      document.querySelector('.notes').appendChild(this.element);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      this.className = "card bounceOut animated";
      
      let notes = document.querySelector('.notes');
      setTimeout(() => notes.removeChild(this), 800);
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // HINT🤩
      // pressing the enter key should also work
      // this.loadNotesFromStorage();

      this.btnAdd = document.getElementById("btnAddNote");
      this.btnAdd.addEventListener("click", this.createNote.bind(this));
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      
      // HINT🤩
      // note.saveToStorage();
      
      this.title = document.getElementById('txtAddNote').value;
      let note = new Note(this.title);
      note.add();
      this.reset();
    }
    
    reset(){
      let input = document.getElementById('txtAddNote');
      input.value = "";
      input.focus();
    }
    
  }
  
  let app = new App();