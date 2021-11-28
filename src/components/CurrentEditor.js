const CurrentEditor = ({
    notes,
    currentNote,
    setNotes,
    activeNote,
    setActiveNote,
}) => {
    return (
        <div className="bg-gray-800 w-screen h-screen py-10 pl-64">
            <h1 className="pl-16 text-5xl text-gray-300 font-light border-b-2 border-gray-600 pb-8">
                {activeNote ? activeNote.title : "Loading..."}
            </h1>
        </div>
    );
};

export default CurrentEditor;
