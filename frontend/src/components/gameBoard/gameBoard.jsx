import React from "react";
import styles from "./gameBoard.module.css";
import StickInsectContainer from "../stickInsectsContainer/stickInsectContainer";

// Function imports all images from a file location
function importAllImages(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
// An array containing all the images imported from the backgrounds folder
const backgroundImages = importAllImages(
  require.context(
    "../../assets/images/backgrounds",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

/**
 * This component is the Game Board a child component of the Game Page.
 *
 * receiving props:
 *   - Index, the number of the background image in the folder
 */
function GameBoard(props) {
  const { currentRound } = props;

  return (
    <div className={styles.background_wrapper}>
      <img
        src={backgroundImages[`B${currentRound}-TH1c.png`].default}
        alt="Natural Scenery"
        className={styles.image_styles}
      />
      <StickInsectContainer index="1" className={styles.stick_styles} />
    </div>
  );
}

export default GameBoard;
