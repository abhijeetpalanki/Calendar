import React from "react";
import dayjs from "dayjs";

const Day = ({ day, rowIdx }) => {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="mt-1 text-sm">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`p-1 my-1 text-sm text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
