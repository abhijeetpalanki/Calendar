import React from "react";
import CreateEventButton from "./CreateEventButton";
import MiniCalendar from "./MiniCalendar";

const Sidebar = () => {
  return (
    <aside className="w-64 p-5 border">
      <CreateEventButton />
      <MiniCalendar />
    </aside>
  );
};

export default Sidebar;
