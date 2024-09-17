import React from "react";
import styles from "./projects.module.css"; // Import CSS Modules
import Image from "next/image";

const ProjectComponent = () => {
  return (
    <section className={styles.projects}>
      <div className={`${styles.projectContainer} container`}>
        <h1 className={styles.projectTitle}>Projekty</h1>
        <div className={styles.carouselControls}>
          <button className={styles.carouselBtn}>{"<"}</button>
          <button className={styles.carouselBtn}>{">"}</button>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.screenshot}>
            <Image
              src="/assets/kurier-przeprowadzki.png"
              alt="alt"
              width={700}
              height={400}
            />
          </div>

          <div className={styles.projectDetails}>
            <h2>Next.js forum</h2>
            <p>Projekt oparty na next.js</p>
            <div className={styles.buttons}>
              <a
                href="#"
                className={styles.btn}
              >
                Projekt LIVE
              </a>
              <a
                href="#"
                className={styles.btn}
              >
                GitHub
              </a>
            </div>
            <div className={styles.techUsed}>
              <p>Wykorzystane narzędzia i technologie:</p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>MongoDB</span>
                <span className={styles.techBadge}>Clerk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
