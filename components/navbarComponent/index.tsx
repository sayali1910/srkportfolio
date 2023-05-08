import React, { useState } from "react";
import styles from "./navbar.module.css";
import ScrollLink from "../scrollLink";
import { TypeAnimation } from "react-type-animation";
import HeroComponent from "../heroComponent";
import AboutComponent from "../aboutComponent";
import Experience from "../experienceComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
        <div className={styles.main01}>
          <h2 className={styles.heading}>
            <TypeAnimation
              sequence={["Hey There!", 1000, "Hey", 1000, "Hey There!", 1000]}
              repeat={Infinity}
            />
          </h2>
          <HeroComponent />
        </div>
        <div></div>
      </div>
      <div className={styles.main1} id="section-1">
        <h2 className={styles.heading}>My Story</h2>
        <AboutComponent />
      </div>
      <div className={styles.main2} id="section-2">
        <h2 className={styles.heading}>Professional Timeline</h2>
        <DndProvider backend={HTML5Backend}>
          <Experience />
        </DndProvider>
      </div>
      <div className={styles.main3} id="section-3">
        <h2 className={styles.heading}>The Tools in My Toolbox</h2>
      </div>
      <div className={styles.main4} id="section-4">
        <h2 className={styles.heading}>Selected Works</h2>
      </div>
      <div className={styles.main5} id="section-5">
        <h2 className={styles.heading}>Beyond the 9 to 5</h2>
      </div>
      <div className={styles.main6} id="section-6">
        <h2 className={styles.heading}>Get in Touch</h2>
      </div>
    </>
  );
};
export default NavbarComponent;
