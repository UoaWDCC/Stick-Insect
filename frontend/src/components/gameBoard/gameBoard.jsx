import React from "react";
import styles from "./gameBoard.module.css";
import StickInsectContainer from "../stickInsectsContainer/stickInsectContainer";

/**
 * This component is the Game Board a child component of the Game Page.
 *
 * receiving props:
 *   - TBD
 *   - Background Image filename
 *   - Removed for es-lint until can be used
 */
function GameBoard() {
  return (
    <div className={styles.background_wrapper}>
      <StickInsectContainer />
    </div>
  );
}

export default GameBoard;
