import "./index.css";
import "./index.js";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(() => {
    const localNotes = localStorage.getItem("notes");
    return localNotes ? JSON.parse(localNotes) : [];
  });

  const [activeNote, setActiveNote] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    if (window.confirm("Are you sure ?") === true) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  };

  //   const saveNote = () => {
  //   const title = document.getElementById("title").value;
  //   const date = document.getElementById("date").value;
  //   const body = activeNote.body;
  //   const updatedNote = {
  //     ...activeNote,
  //     title,
  //     date,
  //     body,
  //     lastModified: Date.now(),
  //   };
  //   onUpdatedNote(updatedNote);
  //   // save updatedNote to data store here

  //   const save = document.getElementsByClassName("app-main-note-edit")[0];
  //   const edit = document.getElementsByClassName("app-main-note-preview")[0];
  //   save.classList.toggle("hide");
  //   edit.classList.add("appear");
  // };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Header />
      <div id="container"></div>

      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdatedNote={onUpdateNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
      />
    </div>
  );
}

export default App;
