import React, { useContext } from "react";
import GlobalContext from "./../context/GlobalContext";

const EventModal = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
      <form className="w-1/4 bg-white rounded-lg shadow-2xl">
        <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <span className="text-gray-400 material-icons-outlined">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="text-gray-400 material-icons-outlined">close</span>
          </button>
        </header>
      </form>
    </div>
  );
};

export default EventModal;
