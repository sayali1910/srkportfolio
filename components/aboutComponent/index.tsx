import React from "react";
import styles from "./about.module.css";
const AboutComponent = () => {
  return (
    <div className={styles.main}>
      <video
        width="700"
        height="400"
        autoPlay
        controls
        muted
        className={styles.aboutVideo}
      >
        <source src="MyStory.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
export default AboutComponent;
