import React, { useState, useEffect } from "react";

import styles from "./timer.module.css";

// eslint-disable-next-line func-names
const Timer = function ({ sec }) {
  return <div className={`${styles.timer}`}>{sec === 0 ? "!" : sec}</div>;
};

export default Timer;
