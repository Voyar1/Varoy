import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.footerInfo}>
          <div className={styles.brand}>
            <h2>VAROY</h2>
          </div>
          <ul className={styles.nav}>
            <li>O mnie</li>
            <li>Oferta</li>
            <li>Projekty</li>

            <li>Kontakt</li>
          </ul>
          {/* <div className={styles.links}>
            <div>
              <h3>Oferta</h3>
              <ul>
                <li>Konsultacje SEO</li>
                <li>Kompleksowa obsługa SEO</li>
                <li>Tworzenie stron internetowych</li>
                <li>Audyty techniczne stron</li>
              </ul>
            </div>

       
          </div> */}
        </div>

        <div className={styles.contact}>
          <h3>Napisz do mnie</h3>
          <p>arkadiusz.r.wojciechowski@gmail.com</p>
          <p>Znajdziesz mnie na:</p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaLinkedin size={30} /> */}
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaGithub size={30} /> */}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 - VAROY Arkadiusz Wojciechowski
      </div>
    </footer>
  );
};

export default Footer;
