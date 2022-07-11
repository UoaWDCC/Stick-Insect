/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
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
function StickInsectContainer({ index, moveToNextRound, forcefulUpdater }) {
  const [randLeftPos, setLeftPos] = useState(
    `${Math.floor(Math.random() * 75) + 10}`
  );
  const [randTopPos, setTopPos] = useState(
    `${Math.floor(Math.random() * 75) + 10}`
  );
  const [randDeg, setDeg] = useState(`${Math.floor(Math.random() * 180)}`);

  const updateInsect = () => {
    setLeftPos(Math.floor(Math.random() * 75) + 10);
    setTopPos(Math.floor(Math.random() * 75) + 10);
    setDeg(Math.floor(Math.random() * 180));
  };

  useEffect(() => {
    setTimeout(() => {
      updateInsect();
    }, 100);
  }, [forcefulUpdater]);

  const handleInsectFound = () => {
    moveToNextRound(true);
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
        // src={stickInsectImages[`th${index}.png`].default}
        // th2.png edited to have -7 Hue, -52 Saturation, +10 Lightness and is 85% Opacity from th1.png
        src={stickInsectImages[`th2.png`].default}
        alt="Stick Insect"
      />
    </div>
  );
}

export default StickInsectContainer;
