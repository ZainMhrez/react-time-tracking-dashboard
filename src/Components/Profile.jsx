import React, { useContext } from "react";
import TimeframeContext from "../Context/TimeframeContext";
import profileImg from "../Assets/images/image-jeremy.png";

const Profile = () => {
  const { changeTimeframe, timeframe } = useContext(TimeframeContext);

  return (
    <section className="profile">
      {/* Profile Info */}
      <div className="profile-info">
        <img src={profileImg} alt="jeremy" />
        <div className="profile-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      {/* Timeframes */}
      <div className="timeframes">
        <p
          className={
            timeframe === "daily" ? "active" : null
          } /* add and remove active class */
          id="daily"
          onClick={(e) => changeTimeframe(e.target.id)} /* Change timeframe */
        >
          Daily
        </p>
        <p
          className={
            timeframe === "weekly" ? "active" : null
          } /* add and remove active class */
          id="weekly"
          onClick={(e) => changeTimeframe(e.target.id)} /* Change timeframe */
        >
          Weekly
        </p>
        <p
          className={
            timeframe === "monthly" ? "active" : null
          } /* add and remove active class */
          id="monthly"
          onClick={(e) => changeTimeframe(e.target.id)} /* Change timeframe */
        >
          Monthly
        </p>
      </div>
    </section>
  );
};

export default Profile;
