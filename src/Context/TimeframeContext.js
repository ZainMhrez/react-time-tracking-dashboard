import { createContext, useState } from "react";

const TimeframeContext = createContext();

export const TimeframeProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState("weekly");

  const changeTimeframe = (value) => {
    setTimeframe(value);
  };

  return (
    <TimeframeContext.Provider value={{ timeframe, changeTimeframe }}>
      {children}
    </TimeframeContext.Provider>
  );
};

export default TimeframeContext;
