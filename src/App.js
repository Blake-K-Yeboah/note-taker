// Components
import Sidebar from "./components/Sidebar";
import CreateNote from "./components/CreateNote";
import CurrentEditor from "./components/CurrentEditor";

// Hooks
import { useEffect, useState } from "react";

function App() {
    const [currentNote, setCurrentNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [activeNote, setActiveNote] = useState({});

    useEffect(() => {
        let notesFromStorage = localStorage.getItem("notes");

        if (notesFromStorage) {
            setCurrentNote(JSON.parse(notesFromStorage)[0].title);
            setNotes(JSON.parse(notesFromStorage));
            setActiveNote(JSON.parse(notesFromStorage)[0]);
        }
    }, []);

    return (
        <>
            <div className="flex flex-row">
                <Sidebar
                    currentNote={currentNote}
                    setCurrentNote={setCurrentNote}
                    notes={notes}
                    setModalShow={setModalShow}
                    setNotes={setNotes}
                    setActiveNote={setActiveNote}
                />
                <CurrentEditor
                    notes={notes}
                    currentNote={currentNote}
                    setNotes={setNotes}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                />
            </div>

            <CreateNote
                modalShow={modalShow}
                setModalShow={setModalShow}
                setNotes={setNotes}
            />
        </>
    );
}

export default App;
