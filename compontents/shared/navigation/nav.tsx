"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const [languageSwitch, setLanguageSwitch] = useState(false);

  const switchLanguageHandler = () => {
    setLanguageSwitch(!languageSwitch);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  // Funkcja nasłuchująca na przewijanie strony
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Zmień 50 na odpowiednią wartość, kiedy nawigacja ma się zmienić
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`${styles.headerWrapper} container`}>
        <div className={styles.logo}>
          <Link href="/">VAROY</Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="#oferta"
                className={styles.navLink}
              >
                Oferta
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#blog"
                className={styles.navLink}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#contact"
                className={`${styles.navLink} ${styles.ctaButton}`}
              >
                Napisz do mnie
              </Link>
            </li>
            <li className={styles.navItem}>
              <div
                className={styles.languageSwitcher}
                onClick={switchLanguageHandler}
              >
                <span>pl</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={languageSwitch ? styles.active : ""}
                >
                  <path
                    d="M7 10L12 15L17 10H7Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
