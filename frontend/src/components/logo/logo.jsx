import React from "react";
import styles from "./logo.module.css";
import uoaLogo from "../../assets/images/uoa-logo.png";
import wdccLogo from "../../assets/images/wdcc-logo.png";

function Logos() {
  return (
    <>
      <img src={uoaLogo} alt="uoa logo" className={styles.logo} />
      <img src={wdccLogo} alt="wdcc logo" className={styles.logo} />
    </>
  );
}

export default Logos;
