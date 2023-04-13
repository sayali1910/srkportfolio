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
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 1</h2>
        </section>
      </div>
      <section className={styles.main1} id="section-1">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">About Me</h2>
        </div>
      </section>
      <section className={styles.main2} id="section-2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">My Experience</h2>
        </div>
      </section>
      <section className={styles.main3} id="section-3">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Skills</h2>
        </div>
      </section>
      <section className={styles.main4} id="section-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Projects</h2>
        </div>
      </section>
      <section className={styles.main5} id="section-5">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Interest</h2>
        </div>
      </section>
      <section className={styles.main6} id="section-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Contact</h2>
        </div>
      </section>
    </>
  );
};
export default NavbarComponent;
