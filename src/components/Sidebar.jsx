import React from "react";
import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";
import MiniCalendar from "./MiniCalendar";

const Sidebar = () => {
  return (
    <aside className="w-64 p-5 border">
      <CreateEventButton />
      <MiniCalendar />
      <Labels />
    </aside>
  );
};

export default Sidebar;
