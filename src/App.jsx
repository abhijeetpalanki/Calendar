import React, { useState, useContext, useEffect, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Fragment>
      {showEventModal && <EventModal />}
      <div className="flex flex-col h-screen">
        <Header month={currentMonth} />

        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
