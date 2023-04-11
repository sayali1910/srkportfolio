import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroComponent from "@/components/heroComponent";
import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState<string>("Hero");
  const handleChange = (section: string) => {
    setSection(section);
  };
  return (
    <>
      <Head>
        <title>Sayali Kanase</title>
        <meta name="description" content="Sayali Kanase Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${
            section === "About"
              ? "/about.png"
              : section === "Hero"
              ? "/Hero.png"
              : section === "Skills"
              ? "/Contact.png"
              : section === "Interest"
              ? "/Testimonial.png"
              : section === "Contact"
              ? "/Contact.png"
              : "/default.png"
          })`,
        }}
      >
        <div className={styles.navbar}>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Hero")}
          >
            Home
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("About")}
          >
            About
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Experience")}
          >
            Experience
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Skills")}
          >
            Skills
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Interest")}
          >
            Interest
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Projects")}
          >
            Projects
          </button>
          <button
            className={styles.navbarButton}
            onClick={() => handleChange("Contact")}
          >
            Contact
          </button>
        </div>

        {/* <HeroComponent /> */}
      </main>
    </>
  );
}
