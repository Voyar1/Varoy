import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroWrapper} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Strony na Miarę Twojego Biznesu</h1>
          <p className={styles.description}>
            Profesjonalne strony internetowe dostosowane do SEO – więcej ruchu,
            więcej klientów, większe zyski.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/path-to-image.png" // Replace with the actual path to your image
            alt="Laptop, headphones, glasses, and coffee"
            layout="responsive"
            width={640} // Set based on the actual image size
            height={360} // Set based on the actual image size
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
