/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import styles from "./stickInsectContainer.module.css";

function StickInsectContainer() {
  const [randLeftPos, setLeftPos] = useState(
    `${Math.floor(Math.random() * 80) + 10}`
  );
  const [randTopPos, setTopPos] = useState(
    `${Math.floor(Math.random() * 80) + 10}`
  );
  const [randDeg, setDeg] = useState(`${Math.floor(Math.random() * 180)}`);

  const updateInsect = () => {
    console.log("Found me!");
    setLeftPos(Math.floor(Math.random() * 80) + 10);
    setTopPos(Math.floor(Math.random() * 80) + 10);
    setDeg(Math.floor(Math.random() * 180));
  };

  const stickStyle = {
    top: `${randTopPos}%`,
    left: `${randLeftPos}%`,
    transform: `rotate(${randDeg}deg)`,
  };

  return (
    <div className={styles.stick_insect_container}>
      <div
        className={styles.stick_insect}
        style={stickStyle}
        onClick={updateInsect}
      >
        Stick Insect
      </div>
    </div>
  );
}

export default StickInsectContainer;
