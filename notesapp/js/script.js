class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 this.element = this.createElement(title);
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

      // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
      a.addEventListener('click', this.remove.bind(newNote));

      newNote.appendChild(p);
      newNote.appendChild(a);
      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector('.notes').appendChild(this.element);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element

      //let notes = document.querySelector('.notes');
      //notes.removeChild(this);
      this.className = "card bounceOut animated";
      
      
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      // this.btnAdd = ???
      // this.btnAdd.addEventListener("click", this.createNote.bind(this));
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
      // this function should create a new note by using the Note() class
      
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // this.reset();
      
      this.title = document.getElementById('txtAddNote').value;
      let note = new Note(this.title);
      note.add();
    }
    
    reset(){
      // this function should reset the form 
    }
    
  }
  
  let app = new App();