import React, { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  miniCalendarMonth: 0,
  setMiniCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEvntModal: false,
  setShowEventModal: () => {},
});

export default GlobalContext;
