import React from "react";

const Sidebar = ({ setModalShow }) => {
    return (
        <div className="bg-gray-200 w-64 h-screen fixed left-0 top-0 z-10">
            <h2 className="pl-5 text-gray-600 text-2xl py-10">Your Notes</h2>
            <button
                onClick={() => setModalShow(true)}
                className="bg-green-500 hover:bg-green-700 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-xl ml-5 fixed bottom-10"
            >
                Create Note
            </button>
        </div>
    );
};

export default Sidebar;
