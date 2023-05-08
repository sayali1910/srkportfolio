import React, { useState } from "react";
import styles from "./index.module.css";
import { Dustbin } from "./moreInfoContainer";
import { Box } from "./logoComponent";
const Experience = () => {
  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        <div
          className={styles.logoList}
          style={{ overflow: "hidden", clear: "both" }}
        >
          <Box name="Xoriant" />
          <Box name="cppsecrets.com" />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin />
        </div>
      </div>
    </div>
  );
};
export default Experience;
