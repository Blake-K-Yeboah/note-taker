// Hooks
import { useState, useRef } from "react";

// Icons
import { FaCheck } from "react-icons/fa";

const CurrentEditor = ({
    notes,
    currentNote,
    setNotes,
    activeNote,
    setActiveNote,
}) => {
    const [titleEditable, setTitleEditable] = useState(true);
    const [title, setTitle] = useState("Class Notes");
    const titleInputEl = useRef(null);

    return (
        <div className="bg-gray-800 w-screen h-screen py-10 pl-64 z-10">
            {!titleEditable ? (
                <h1
                    className=" pl-16 text-5xl text-gray-300 font-light border-b-2 border-gray-600 pb-8"
                    onClick={() => {
                        setTitle(activeNote.title);
                        setTitleEditable(true);
                        setTimeout(() => titleInputEl.current.focus(), 150);
                    }}
                >
                    {activeNote ? activeNote.title : "Loading..."}
                </h1>
            ) : (
                <div className="flex flex-row relative">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                        className="bg-gray-800 text-5xl text-gray-300 font-light border-b-2 border-blue-600 pb-4 pl-16 outline-none focus:shadow-2xl w-screen"
                        ref={titleInputEl}
                    />
                    <button
                        className="text-white bg-green-400 ml-5 rounded-xl mt-5 
                        hover:bg-green-600 cursor-pointer transition-all duration-300 ease-in-out w-32 h-10 flex justify-center items-center absolute left-12 top-20"
                        onClick={() => setTitleEditable(false)}
                    >
                        Save Title <FaCheck className="ml-3" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default CurrentEditor;
