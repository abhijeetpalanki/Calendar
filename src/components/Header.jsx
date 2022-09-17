import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

const Header = ({ month }) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="flex items-center px-4 py-2">
      <img src={logo} alt="calendar" className="w-12 h-12 mr-2" />
      <h1 className="mr-10 text-xl font-bold text-gray-500"> Calendar</h1>
      <button className="px-4 py-2 mr-5 border rounded" onClick={handleReset}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl font-bold text-gray-500">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default Header;
