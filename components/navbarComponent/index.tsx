import React, { useState } from "react";
import styles from "./navbar.module.css";
import ScrollLink from "../scrollLink";
const NavbarComponent = () => {
  const [section, setSection] = useState<string>("Hero");
  const handleChange = (section: string) => {
    setSection(section);
  };
  return (
    <>
      <div className={styles.navbar}>
        <ScrollLink className={styles.navbarButton} href="#section-0">
          Home
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-1">
          About
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-2">
          Experience
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-3">
          Skills
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-4">
          Projects
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-5">
          Interest
        </ScrollLink>
        <ScrollLink className={styles.navbarButton} href="#section-6">
          Contact Me
        </ScrollLink>
      </div>
      <div className={styles.main0} id="section-0">
        <h2 className={styles.heading}>Hi There!</h2>
      </div>
      <div className={styles.main1} id="section-1">
        <h2 className={styles.heading}>About Me</h2>
      </div>
      <div className={styles.main2} id="section-2">
        <h2 className={styles.heading}>My Experience</h2>
      </div>
      <div className={styles.main3} id="section-3">
        <h2 className={styles.heading}>Skills</h2>
      </div>
      <div className={styles.main4} id="section-4">
        <h2 className={styles.heading}>Projects</h2>
      </div>
      <div className={styles.main5} id="section-5">
        <h2 className={styles.heading}>Interest</h2>
      </div>
      <div className={styles.main6} id="section-6">
        <h2 className={styles.heading}>Contact</h2>
      </div>
    </>
  );
};
export default NavbarComponent;
