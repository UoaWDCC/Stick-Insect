import React from "react";
import styles from "./gameBoard.module.css";
import StickInsectDiv from "../stickInsectsContainer/stickInsectContainer";

/**
 * This component is the Game Board a child component of the Game Page.
 *
 * receiving props:
 *   - TBD
 *   - Background Image filename
 *   - Removed for es-lint until can be used
 */
export function GameBoard() {
  return (
    <div className={styles.background_wrapper}>
      <StickInsectDiv />
    </div>
  );
}

export default GameBoard;
