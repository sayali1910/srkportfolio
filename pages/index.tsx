import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroComponent from "@/components/heroComponent";
import { useState } from "react";
import ScrollLink from "@/components/scrollLink";
import NavbarComponent from "@/components/navbarComponent";

export default function Home() {
  const [section, setSection] = useState<string>("Hero");
  const handleChange = (section: string) => {
    setSection(section);
  };
  return (
    <>
      <NavbarComponent />
    </>
  );
}
