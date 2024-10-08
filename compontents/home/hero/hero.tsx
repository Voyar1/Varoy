import Image from "next/image";
import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.welcome}`}>
      <div className={`${classes.main} container`}>
        {/* Sekcja z tekstem */}
        <div>
          <h1 className={classes.bigText}>Strony na Miarę Twojego Biznesu</h1>
          <p className={classes.info}>
            Profesjonalne strony internetowe dostosowane do SEO – więcej ruchu,
            więcej klientów, większe zyski.
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
