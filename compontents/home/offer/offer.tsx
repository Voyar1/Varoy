"use client";
import { SetStateAction, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./offer.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const offers = [
  {
    title: "Kompleksowa obsługa SEO",
    content:
      "Oferuję kompleksową obsługę SEO, która obejmuje wszystkie kluczowe aspekty optymalizacji witryn. Od analizy słów kluczowych i audytu SEO, przez strategię content marketingową, aż po monitorowanie wyników i raportowanie. Dzięki holistycznemu podejściu, mogę zapewnić długotrwałe efekty i realny wzrost widoczności w wyszukiwarkach.",
  },
  {
    title: "Tworzenie stron internetowych",
    content:
      "Specjalizuję się w tworzeniu nowoczesnych stron internetowych, łącząc Next.js z WordPress jako headless CMS. Takie podejście umożliwia separację frontendu od backendu, co zapewnia większą elastyczność i wydajność. Dzięki temu możliwe jest tworzenie responsywnych i dynamicznych aplikacji internetowych, które dostosowują się do potrzeb użytkowników, a zarządzanie treścią staje się prostsze i bardziej intuicyjne. To rozwiązanie pozwala na szybkie wprowadzanie zmian oraz łatwiejsze skalowanie, co ma kluczowe znaczenie w dzisiejszym szybko zmieniającym się świecie online.",
  },
  {
    title: "Konsultacje SEO",
    content:
      "Oferuję profesjonalne konsultacje SEO, które pomagają zidentyfikować mocne i słabe strony obecnej strategii. W trakcie sesji omawiam kluczowe elementy optymalizacji, takie jak analiza słów kluczowych, audyty techniczne oraz strategię linkowania. Dzięki mojemu doświadczeniu w różnych branżach, dostosowuję rekomendacje do indywidualnych potrzeb i celów biznesowych, aby wspierać efektywny rozwój online.",
  },
  {
    title: "Audyty techniczne stron",
    content:
      "Oferuję szczegółowe audyty techniczne stron internetowych, które pozwalają zidentyfikować problemy wpływające na ich wydajność i widoczność w wyszukiwarkach. Analizuję aspekty takie jak struktura URL, prędkość ładowania, responsywność oraz błędy indeksacji. Na podstawie wyników audytu dostarczam konkretne rekomendacje, które pomagają w optymalizacji witryny i poprawie jej pozycji w wynikach wyszukiwania, co przekłada się na lepsze doświadczenia użytkowników oraz wyższy ruch organiczny.",
  },
];

const OfferSection = () => {
  const [activeOffer, setActiveOffer] = useState(0);
  const [inProp, setInProp] = useState(true);
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

  const handleOfferChange = (index: SetStateAction<number>) => {
    setInProp(false);
    setTimeout(() => {
      setActiveOffer(index);
      setInProp(true);
    }, 300); // Dopasowane do czasu animacji wyjścia
  };

  return (
    <motion.section
      className={styles.offerSection}
      id="offer"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.leftColumn}>
          <h2>Zakres współpracy</h2>
          {offers.map((offer, index) => (
            <div key={index}>
              <div
                className={styles.offerListItem}
                onClick={() => handleOfferChange(index)}
                style={{ cursor: "pointer" }}
              >
                <h3>{offer.title}</h3>
                {activeOffer === index && (
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.88174 14.7604V12.4896H18.8216V10.2188L22.3506 13.625L18.8216 17.0312V14.7604H5.88174Z"
                      fill="black"
                      fillOpacity="0.72"
                    />
                  </svg>
                )}
              </div>

              {/* Wstawiamy kartę pod nagłówkiem na urządzeniach mobilnych */}
              <CSSTransition
                in={activeOffer === index && inProp}
                timeout={300}
                classNames={{
                  enter: styles.columnEnter,
                  enterActive: styles.columnEnterActive,
                  exit: styles.columnExit,
                  exitActive: styles.columnExitActive,
                }}
                unmountOnExit
              >
                <div className={styles.rightColumnMobile}>
                  <span>{offers[index].title}</span>
                  <p>{offers[index].content}</p>
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>

        {/* Prawa kolumna dla widoków desktopowych */}
        <div className={styles.rightColumnWrapper}>
          <CSSTransition
            in={inProp}
            timeout={300}
            classNames={{
              enter: styles.columnEnter,
              enterActive: styles.columnEnterActive,
              exit: styles.columnExit,
              exitActive: styles.columnExitActive,
            }}
            unmountOnExit
          >
            <div className={styles.rightColumn}>
              <span>{offers[activeOffer].title}</span>
              <p>{offers[activeOffer].content}</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </motion.section>
  );
};

export default OfferSection;
