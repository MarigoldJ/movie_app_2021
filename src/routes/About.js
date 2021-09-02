import React from "react";
import "./About.css";

function About(props) {
  console.log(props)
  return (
    <div className="about__container">
      <span>
        "Computer has no fault. Only Human is wrong."
      </span>
      <span>
        - Yusang Jeon, 2021
      </span>
    </div>
  );
}

export default About;