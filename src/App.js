// Components
import Sidebar from "./components/Sidebar";

// Hooks
import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";

function App() {
    const [currentNote, setCurrentNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        let notesFromStorage = localStorage.getItem("notes");

        if (notesFromStorage) {
            setCurrentNote(JSON.parse(notesFromStorage)[0].title);
            setNotes(JSON.parse(notesFromStorage));
        }
    }, []);

    return (
        <div className="flex flex-row">
            <Sidebar
                currentNote={currentNote}
                notes={notes}
                setModalShow={setModalShow}
            />
            <CreateNote modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default App;
