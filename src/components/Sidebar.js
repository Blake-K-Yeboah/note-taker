import React from "react";
import NoteLink from "./NoteLink";

const Sidebar = ({
    notes,
    currentNote,
    setCurrentNote,
    setModalShow,
    setNotes,
    setActiveNote,
}) => {
    return (
        <div className="bg-gray-700 w-64 h-screen fixed left-0 top-0 z-20">
            <h2 className="pl-5 text-gray-200 text-2xl py-10">Your Notes</h2>
            {notes.map((note) => {
                return (
                    <NoteLink
                        title={note.title}
                        active={note.title === currentNote}
                        setCurrentNote={setCurrentNote}
                        setNotes={setNotes}
                        notes={notes}
                        key={note.title}
                        setActiveNote={setActiveNote}
                    />
                );
            })}
            <button
                onClick={() => setModalShow(true)}
                className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-xl ml-5 fixed bottom-10"
            >
                Create Note
            </button>
        </div>
    );
};

export default Sidebar;
