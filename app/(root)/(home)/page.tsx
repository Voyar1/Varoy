import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/compontents/home/hero/hero";
import FeaturesSection from "@/compontents/home/features/features";
import OfferSection from "@/compontents/home/offer/offer";
import ProjectComponent from "@/compontents/home/projects/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <OfferSection />
      <ProjectComponent />
    </>
  );
}
