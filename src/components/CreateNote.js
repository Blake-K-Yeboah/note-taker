import React from "react";

const CreateNote = ({ modalShow, setModalShow }) => {
    modalShow = true;
    return (
        <>
            {/* Overlay */}
            <div
                className={`transition-all duration-1000 ease-in-out bg-black w-screen h-screen fixed top-0 left-0 ${
                    modalShow ? "opacity-25 z-20" : "opacity-0 z-0"
                }`}
            ></div>

            {/* Create Note Modal */}
            <div
                className="bg-white absolute h-64 z-30 rounded-2xl p-5"
                style={{
                    width: "35%",
                    left: "50%",
                    top: "45%",
                    transform: "translate(-50%, -50%)",
                }}
            ></div>
        </>
    );
};

export default CreateNote;
