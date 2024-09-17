import styles from "./offer.module.css";

const OfferSection = () => {
  return (
    <section className={styles.offerSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftColumn}>
          <h2>Moja oferta </h2>
          <h3>Kompleksowa obsługa SEO ➔</h3>
          <h3>Tworzenie stron internetowych ➔</h3>
          <h3>Konsultacje SEO ➔</h3>
          <h3>Audyty techniczne stron ➔</h3>
        </div>
        <div className={styles.rightColumn}>
          <span>Stała opieka nad twoim projektem</span>
          <p>
            Potrzebujesz długoterminowej strategii dla swojego projektu? Zajmę
            się kompleksowo Twoją stroną tak aby wyniki były dla zadowalające.
          </p>
          <a href="#">Czytaj więcej ➔</a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
