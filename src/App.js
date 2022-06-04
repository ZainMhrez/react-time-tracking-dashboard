import React from "react";
import "./Styles/app.scss";
// Components
import Boxes from "./Components/BoxesSection/Boxes";
import Profile from "./Components/Profile";
import { TimeframeProvider } from "./Context/TimeframeContext";

const App = () => {
  return (
    <TimeframeProvider>
      <main className="container">
        <Profile />
        <Boxes />
      </main>
    </TimeframeProvider>
  );
};

export default App;
