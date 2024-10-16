"use client";
import styles from "./features.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FeaturesSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Moment wyzwolenia animacji (20% sekcji widoczne)
    triggerOnce: true, // Animacja uruchamia się raz
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      className={`${styles.featuresSection} container`}
      id="features"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h2 className={styles.title}>Co mnie wyróżnia?</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg
              width="67"
              height="75"
              viewBox="0 0 67 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M33.2674 12.4475C25.6131 12.4475 19.406 19.415 19.406 28.0069C19.442 33.2099 21.84 37.7719 25.4551 40.4201L27.7228 46.6781C26.9577 46.6781 26.3367 47.3752 26.3367 48.2341C26.3367 49.0929 26.9577 49.79 27.7228 49.79C26.9577 49.79 26.3367 50.487 26.3367 51.3459C26.3367 52.2048 26.9577 52.9019 27.7228 52.9019C26.9577 52.9019 26.3367 53.5989 26.3367 54.4578C26.3367 55.3167 26.9577 56.0137 27.7228 56.0137C26.9577 56.0137 26.3367 56.7108 26.3367 57.5697C26.3367 58.4285 26.9577 59.1256 27.7228 59.1256H28.8595C29.8076 60.8371 31.3961 62.0165 33.2424 62.2344C35.1387 62.0134 36.73 60.8371 37.6615 59.1536L38.812 59.1256C39.5771 59.1256 40.1981 58.4285 40.1981 57.5697C40.1981 56.7108 39.5771 56.0137 38.812 56.0137C39.5771 56.0137 40.1981 55.3167 40.1981 54.4578C40.1981 53.5989 39.5771 52.9019 38.812 52.9019C39.5771 52.9019 40.1981 52.2048 40.1981 51.3459C40.1981 50.487 39.5771 49.79 38.812 49.79C39.5771 49.79 40.1981 49.0929 40.1981 48.2341C40.1981 47.3752 39.5771 46.6781 38.812 46.6781L41.0298 40.4544C44.6947 37.7719 47.0928 33.2099 47.1288 28.0131C47.1288 19.415 40.9217 12.4475 33.2674 12.4475ZM39.505 37.996L38.812 38.525L38.507 39.4275L36.0397 46.0869C35.9232 46.4323 35.6321 46.675 35.2912 46.6781H31.105C30.8195 46.6159 30.5894 46.3887 30.4979 46.0931L28.0832 39.4275L27.7228 38.525L27.0298 37.9649C24.1327 35.7866 22.2365 32.1519 22.1783 28.0162C22.1783 21.1327 27.1434 15.5594 33.2674 15.5594C39.3914 15.5594 44.3565 21.1327 44.3565 28.0069C44.3094 32.1643 42.4104 35.8146 39.5438 37.968L39.505 37.996Z"
                fill="black"
              />
              <path
                d="M39.6159 21.7831C38.0246 19.8787 35.7708 18.6868 33.2702 18.6713L33.2674 21.7831C34.8892 21.7894 36.3585 22.5238 37.4258 23.7125C38.1965 24.9137 38.6983 26.3825 38.8092 27.9758L41.5842 28.0038C41.4595 25.6512 40.7387 23.5133 39.5937 21.7458L39.6159 21.7831Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Zrozumienie potrzeb klienta</h3>
            <a
              href="#"
              className={styles.readMore}
            >
              Czytaj więcej →
            </a>
            <p className={styles.cardDescription}>
              Każdy projekt zaczynam od dokładnej analizy potrzeb i celów.
              Dzięki temu mogę zaprojektować rozwiązania, które są w pełni
              dopasowane do wizji i skutecznie wspierają rozwój biznesu. Dla
              mnie najważniejszy jest sukces klienta, nie tylko puste pozycje w
              wynikach wyszukiwania.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg
              width="67"
              height="75"
              viewBox="0 0 71 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.6968 46.842V18.8351H17.8769V46.842H12.0736V53.0657H58.5001V46.842H52.6968ZM41.0901 49.9539H29.4835V46.842H41.0901V49.9539ZM49.7951 43.7301H20.7785V21.947H49.7951V43.7301Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Technologie wspierające wyniki</h3>
            <a
              href="#"
              className={styles.readMore}
            >
              Czytaj więcej →
            </a>
            <p className={styles.cardDescription}>
              Dzięki znajomości różnych technologii mogę efektywnie wspierać
              działania SEO w wielu systemach i platformach. Jeśli chodzi o
              tworzenie stron internetowych, specjalizuję się w Next.js, co
              pozwala na budowanie nowoczesnych i wydajnych rozwiązań, które
              przyczyniają się do osiągania lepszych wyników w sieci.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg
              width="67"
              height="75"
              viewBox="0 0 69 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.1642 49.9538C51.1642 53.3925 48.6251 56.1776 45.4903 56.1776C42.3554 56.1776 39.8163 53.3925 39.8163 49.9538C39.8163 46.5152 42.3554 43.7301 45.4903 43.7301C48.6251 43.7301 51.1642 46.5152 51.1642 49.9538Z"
                fill="black"
              />
              <path
                d="M44.6392 62.4014C42.3696 62.4014 40.1 61.779 38.1142 60.223L20.525 49.9539C19.1065 48.7091 17.9717 48.0867 16.8369 46.842C13.4325 43.1077 11.4467 37.8176 11.4467 32.5274C11.4467 27.2372 13.4325 22.2582 16.8369 18.5239C20.2413 14.7897 24.7804 12.6114 29.6033 12.6114C34.4261 12.6114 38.9653 14.7897 42.6533 18.5239C43.7881 19.7687 44.3555 20.7023 45.4903 22.2582L55.4197 42.1742C58.2567 47.4644 57.4056 53.9993 53.4338 58.3559C50.8805 61.1566 48.0436 62.4014 44.6392 62.4014ZM29.6033 15.7233C25.6315 15.7233 21.6597 17.5904 18.8228 20.7023C15.9858 23.8141 14.2836 28.1708 14.2836 32.5274C14.2836 37.1952 15.9858 41.2406 18.8228 44.3525C19.6739 45.2861 20.525 45.9084 21.9434 46.842L39.8164 57.4224C41.5185 58.6671 43.2207 58.9783 44.9229 58.9783C47.4762 58.9783 49.7457 58.0447 51.4479 55.8664C54.5686 52.4434 55.136 47.4644 52.8664 43.4189L42.937 23.5029C42.0859 22.2582 41.5185 21.3246 40.6674 20.3911C37.5468 17.5904 33.8587 15.7233 29.6033 15.7233Z"
                fill="black"
              />
              <path
                d="M42.6533 34.3945V31.2826L38.6816 29.7267C38.3979 29.1043 38.3979 28.7931 38.1142 28.1708L39.8164 24.1253L37.8305 21.947L34.1424 23.8141C33.575 23.503 33.2913 23.503 32.7239 23.1918L31.3055 18.8351H28.4685L27.05 23.1918C26.4826 23.503 26.1989 23.503 25.6315 23.8141L21.9435 21.947L19.9576 24.1253L21.6598 28.1708C21.3761 28.7931 21.3761 29.1043 21.0924 29.7267L17.1206 31.2826V34.3945L21.0924 35.9504C21.3761 36.5728 21.3761 36.884 21.6598 37.5064L19.9576 41.5518L21.9435 43.7301L25.6315 41.863C26.1989 42.1742 26.4826 42.4854 27.05 42.4854L28.4685 46.842H31.3055L32.7239 42.4854C33.2913 42.1742 33.575 42.1742 34.1424 41.863L37.8305 43.7301L39.8164 41.5518L38.1142 37.5064C38.3979 36.884 38.6816 36.5728 38.6816 35.9504L42.6533 34.3945ZM29.887 37.5064C27.6174 37.5064 25.6315 35.3281 25.6315 32.8386C25.6315 30.3491 27.6174 28.1708 29.887 28.1708C32.1565 28.1708 34.1424 30.3491 34.1424 32.8386C34.1424 35.3281 32.1565 37.5064 29.887 37.5064Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className={styles.cardTitle}>
              Ekspercka wiedza w zakresie SEO
            </h3>
            <a
              href="#"
              className={styles.readMore}
            >
              Czytaj więcej →
            </a>
            <p className={styles.cardDescription}>
              Posiadam ekspercką wiedzę w zakresie SEO, która sprawdza się w
              różnych branżach – od sklepów internetowych, przez strony
              usługowe, aż po placówki medyczne. Moje doświadczenie pozwala na
              skuteczną optymalizację witryn, niezależnie od specyfiki
              działalności.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
