/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import styles from "./stickInsectContainer.module.css";

// Function imports all images from a file location
function importAllImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
// An array containing all the images imported from the stickInsects folder
const stickInsectImages = importAllImages(
  require.context(
    "../../assets/images/stickInsects",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

/**
 * This component is the Stick Insect a child component of the Game Board.
 *
 * receiving props:
 *   - Index, the number of the specific stick insect image we want to use
 */
function StickInsectContainer({ index, moveToNextRound }) {
  const [randLeftPos, setLeftPos] = useState(
    `${Math.floor(Math.random() * 80) + 10}`
  );
  const [randTopPos, setTopPos] = useState(
    `${Math.floor(Math.random() * 80) + 10}`
  );
  const [randDeg, setDeg] = useState(`${Math.floor(Math.random() * 180)}`);

  const updateInsect = () => {
    console.log("Found me!");
    setLeftPos(Math.floor(Math.random() * 65) + 10);
    setTopPos(Math.floor(Math.random() * 65) + 10);
    setDeg(Math.floor(Math.random() * 180));
  };

  const handleInsectFound = () => {
    moveToNextRound();
    setTimeout(() => {
      updateInsect();
    }, 100);
  };

  const stickStyle = {
    top: `${randTopPos}%`,
    left: `${randLeftPos}%`,
    transform: `rotate(${randDeg}deg)`,
  };

  return (
    <div className={styles.stick_insect_container}>
      <img
        className={styles.stick_insect}
        style={stickStyle}
        onClick={handleInsectFound}
        src={stickInsectImages[`th${index}.png`].default}
        alt="Stick Insect"
      />
    </div>
  );
}

export default StickInsectContainer;
