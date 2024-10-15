"use client";
import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group"; // Import react-transition-group
import styles from "./projects.module.css";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projectsData = [
  {
    id: 1,
    title: "Next.js Forum",
    description: "Projekt oparty na Next.js",
    imageUrl: "/assets/kurier-przeprowadzki.png",
    liveLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "MongoDB", "Clerk"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Platforma do sprzedaży online oparta na Next.js",
    imageUrl: "/assets/kurier-przeprowadzki.png",
    liveLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "Stripe", "Supabase"],
  },
  {
    id: 3,
    title: "Blog App",
    description: "Aplikacja blogowa z CMS",
    imageUrl: "/assets/kurier-przeprowadzki.png",
    liveLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "Sanity.io", "TailwindCSS"],
  },
];

const ProjectComponent = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProject((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

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
      className={styles.projects}
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className={`${styles.projectContainer} container`}>
        <h2 className={styles.sectionTitle}>Projekty</h2>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <button
            className={styles.carouselBtn}
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <button
            className={styles.carouselBtn}
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
        {/* Dots to indicate current project */}

        {/* SwitchTransition for project content */}
        <SwitchTransition>
          <CSSTransition
            key={currentProject}
            timeout={500} /* Duration of the transition */
            classNames={{
              enter: styles.enter,
              enterActive: styles.enterActive,
              exit: styles.exit,
              exitActive: styles.exitActive,
            }}
          >
            <div className={styles.projectContentWrapper}>
              <div className={styles.projectContent}>
                {/* Screenshot */}
                <div className={styles.screenshot}>
                  <Image
                    src={projectsData[currentProject].imageUrl}
                    alt={projectsData[currentProject].title}
                    width={500}
                    height={300}
                  />
                </div>

                {/* Project details */}
                <div className={styles.projectDetails}>
                  <h3>{projectsData[currentProject].title}</h3>
                  <p>{projectsData[currentProject].description}</p>
                  <div className={styles.buttons}>
                    <a
                      href={projectsData[currentProject].liveLink}
                      className={styles.btn}
                    >
                      Projekt LIVE
                    </a>
                    <a
                      href={projectsData[currentProject].githubLink}
                      className={styles.btn}
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.techUsed}>
                    <p>Wykorzystane narzędzia i technologie:</p>
                    <div className={styles.techStack}>
                      {projectsData[currentProject].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className={styles.techBadge}
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className={styles.dotsContainer}>
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentProject ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectComponent;
