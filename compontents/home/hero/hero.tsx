import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.welcome}`}>
      <div className={`${classes.main} container`}>
        {/* Sekcja z tekstem */}
        <div>
          <h1 className={classes.bigText}>
            Specjalista SEO & Frontend Developer
          </h1>
          <p className={classes.info}>
            Jako specjalista SEO wykorzystuję swoje doświadczenie do tworzenia
            stron doskonale dostosowanych do wymogów wyszukiwarek. Każda strona,
            którą tworzę, jest nowoczesna, funkcjonalna i zoptymalizowana, aby
            wspierać Twoją widoczność w sieci.
          </p>
        </div>

        {/* Sekcja z obrazem */}
        <div className={classes.imagesWrapper}>
          <div className={classes.image}>
            <Image
              src="/assets/kurier-przeprowadzki.png"
              alt="back-card"
              className={classes.imagePhoto}
              height={400}
              width={400}
            />
          </div>

          <div className={classes.image}>
            <Image
              src="/assets/kurier-przeprowadzki.png"
              alt="front-card"
              className={classes.imagePhoto}
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
