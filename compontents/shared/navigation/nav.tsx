"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funkcja nasłuchująca na przewijanie strony
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isMobileMenuOpen) {
        setIsScrolled(true);
      } else if (!isMobileMenuOpen) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Funkcja otwierająca/zamykająca mobilne menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`${styles.headerWrapper} container`}>
        <div className={styles.logo}>
          <Link href="/">VAROY</Link>
        </div>

        {/* Hamburger dla urządzeń mobilnych */}
        <div
          className={styles.hamburger}
          onClick={toggleMobileMenu}
        >
          {!isMobileMenuOpen && (
            <>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </>
          )}
        </div>

        {/* Nawigacja dla desktop oraz mobilna */}
        <nav
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.navMobileOpen : ""
          }`}
        >
          {isMobileMenuOpen && ( // Wyświetl przycisk zamknięcia tylko w widoku mobilnym
            <div className={styles.mobileMenuHeader}>
              <button
                className={styles.closeButton}
                onClick={toggleMobileMenu}
              >
                &times;
              </button>
            </div>
          )}
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="#features"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                O mnie
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#offer"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                Oferta
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#projects"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                Projekty
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/kontakt"
                className={`${styles.navLink} ${styles.ctaButton}`}
                onClick={toggleMobileMenu}
              >
                Napisz do mnie
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
