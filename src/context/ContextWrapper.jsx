import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [miniCalendarMonth, setMiniCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (miniCalendarMonth !== null) {
      setMonthIndex(miniCalendarMonth);
    }
  }, [miniCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        miniCalendarMonth,
        setMiniCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
