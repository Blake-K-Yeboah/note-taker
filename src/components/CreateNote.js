// Icons
import { FaTimes } from "react-icons/fa";

// useState hook
import { useState } from "react";

const CreateNote = ({ modalShow, setModalShow, setNotes }) => {
    const handleClose = () => {
        setModalShow(false);
    };

    const [title, setTitle] = useState("");

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const [error, setError] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError(null);

        if (title) {
            // Create Note
            const newNote = {
                title,
                body: "",
            };

            const currentNotes = localStorage.getItem("notes")
                ? JSON.parse(localStorage.getItem("notes"))
                : [];

            currentNotes.push(newNote);

            localStorage.setItem("notes", JSON.stringify(currentNotes));
            setNotes(currentNotes);
            setTitle("");
            setModalShow(false);
        } else {
            setError("Please enter a title.");
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`transition-opacity duration-1000 ease-in-out bg-black w-screen h-screen fixed top-0 left-0 ${
                    modalShow ? "opacity-25 z-20" : "opacity-0 z-0"
                }`}
            ></div>

            {/* Create Note Modal */}
            <div
                className={`bg-white absolute h-64 rounded-2xl p-8 transition-opacity duration-1000 ease-in-out ${
                    modalShow ? "opacity-100 z-30" : "opacity-0 z-0"
                }`}
                style={{
                    width: "35%",
                    left: "50%",
                    top: "45%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <button
                    className="text-white bg-red-400 absolute right-8 top-8 p-2 rounded-3xl hover:bg-red-600 transition-all duration-300 ease-in-out"
                    onClick={handleClose}
                >
                    <FaTimes />
                </button>
                <h2 className="font-medium text-2xl">Create New Note</h2>
                <form className="mt-6" onSubmit={handleFormSubmit}>
                    <div className="mb-7">
                        <label
                            htmlFor="noteTitle"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Title
                        </label>
                        <input
                            id="noteTitle"
                            value={title}
                            onChange={handleInputChange}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none
                             focus:shadow-lg transition-all duration-300 ease-in-out ${
                                 error ? "border border-red-500" : ""
                             }`}
                            placeholder="Title"
                        />
                        <p className="text-red-500 text-xs italic">
                            {error || ""}
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 transition-all duration-300 ease-in-out text-white px-4 py-2 rounded-xl"
                    >
                        Create Note
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateNote;
