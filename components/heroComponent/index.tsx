import React from "react";
import styles from "./hero.module.css";
const HeroComponent = () => {
  return (
    <div className={styles.heroDiv}>
      <h1 className={styles.heroHeading}>I'm Sayali Kanase</h1>
      <p className={styles.heroParagraph}>
        I am a passionate developer with experience of around 2 years. I am
        always excited to work on new projects and develop innovative solutions.
        As a detail-oriented individual, I love tackling complex problems and
        using my good debugging skills to find elegant solutions.
      </p>
      <div className={styles.resume}>
        <a
          href="/Sayali Kanase Resume.pdf"
          download="Sayali Kanase Resume.pdf"
          className={styles.resumeButton}
        ></a>
        <div className={styles.popupResume}></div>
      </div>
    </div>
  );
};
export default HeroComponent;
