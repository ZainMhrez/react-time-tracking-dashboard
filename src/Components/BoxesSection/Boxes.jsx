import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import Box from "./Box";

const Boxes = ({ timeframe }) => {
  const [values, setValues] = useState(null);
  /* Get data from JSON file  */
  useEffect(() => {
    axios
      .get("./data.json")
      .then((data) => {
        setValues(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="boxes">
      {/* Loop on all boxes and add each one with its own values */}
      {values &&
        values.map((v) => {
          return <Box values={v} key={v.title} />;
        })}
    </div>
  );
};

export default Boxes;
