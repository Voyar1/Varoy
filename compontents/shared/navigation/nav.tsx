import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles.header}>
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
              <div className={styles.languageSwitcher}>
                <span>pl</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
