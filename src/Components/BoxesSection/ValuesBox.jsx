import React, { useContext } from "react";
import TimeframeContext from "../../Context/TimeframeContext";

const Values = ({ values }) => {
  const { timeframe } = useContext(TimeframeContext);
  return (
    <div className="values">
      {/* Condition to show data based on the selected timeframe */}
      {timeframe === "daily" ? (
        <>
          <p className="current">{values.timeframes.daily.current}hrs</p>
          <p className="previous">
            Last Week - {values.timeframes.daily.previous}hrs
          </p>
        </>
      ) : timeframe === "monthly" ? (
        <>
          <p className="current">{values.timeframes.monthly.current}hrs</p>
          <p className="previous">
            Last Week - {values.timeframes.monthly.previous}hrs
          </p>
        </>
      ) : (
        <>
          <p className="current">{values.timeframes.weekly.current}hrs</p>
          <p className="previous">
            Last Week - {values.timeframes.weekly.previous}hrs
          </p>
        </>
      )}
    </div>
  );
};

export default Values;
