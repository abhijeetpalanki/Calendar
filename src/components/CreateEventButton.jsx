import React, { useContext } from "react";
import plusIcon from "../assets/plus.svg";
import GlobalContext from "./../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="flex items-center p-2 border rounded-full shadow-md hover:shadow-2xl"
    >
      <img src={plusIcon} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
