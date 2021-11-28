import { FaTimes } from "react-icons/fa";

const noteLink = ({
    title,
    active,
    setCurrentNote,
    setNotes,
    notes,
    setActiveNote,
}) => {
    const handleClose = () => {
        setCurrentNote("");
        setNotes(notes.filter((note) => note.title !== title));
        localStorage.setItem(
            "notes",
            JSON.stringify(notes.filter((note) => note.title !== title))
        );
    };

    return (
        <div
            onClick={() => {
                setCurrentNote(title);
                setActiveNote(notes.filter((note) => note.title === title)[0]);
            }}
            className={`${
                active
                    ? "text-blue-50 cursor-default bg-blue-500"
                    : "text-gray-400 cursor-pointer"
            } text-lg pl-5 py-5 relative`}
        >
            {title}

            {active ? (
                <FaTimes
                    className="text-blue-200 absolute right-5 hover:text-red-500 cursor-pointer"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                    onClick={handleClose}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default noteLink;
