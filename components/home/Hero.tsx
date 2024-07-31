import Image from "next/image";
import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.welcome}>
      <div className={classes.main}>
        {/* Sekcja z tekstem */}
        <div>
          <h1>Strony na Miarę Twojego Biznesu</h1>
          <p>
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
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={classes.imagePhoto}
            />
          </div>

          <div className={classes.image}>
            <Image
              src="/assets/kurier-przeprowadzki.png"
              alt="front-card"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className={classes.imagePhoto}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
