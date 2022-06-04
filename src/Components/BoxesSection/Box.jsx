import React from "react";
import ValuesBox from "./ValuesBox";
import "../../Styles/_variables.scss";
// images
import dots from "../../Assets/images/icon-ellipsis.svg";

const Box = ({ values }) => {
  const boxBg = {
    backgroundImage: `url(images/icon-${values.img}.svg)`,
    backgroundColor: `var(--${values.img}-clr)`,
  };

  return (
    <section className="box" style={boxBg} key={values.title}>
      <div className="box-info">
        {/* title */}
        <div className="title">
          <h2>{values.title}</h2>
          <img src={dots} alt="dots" />
        </div>
        {/* values */}
        <ValuesBox values={values} />
      </div>
    </section>
  );
};

export default Box;
