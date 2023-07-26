import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Poster } from "@/components/Poster/Poster";
import { Company } from "@/components/Company/Company";
import { TwoTickerSection } from "@/components/TwoTickerSection/TwoTickerSection";
import { Mission } from "@/components/Mission/Mission";
import { Process } from "@/components/Process/Process";
import { Blog } from "@/components/Blog/Blog";
import { Action } from "@/components/Action/Action";
import { Footer } from "@/components/Footer/Footer";
import { Preloader } from "@/components/Preloader/Preloader";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import initSmoothScroll from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const sectionRefs = document.querySelectorAll(".section");
      sectionRefs.forEach((sectionRef) => {
        const gsapItems = Array.from(sectionRef.children).flatMap((child) =>
          Array.from(child.querySelectorAll(".reveal"))
        );

        gsap.from(gsapItems, {
          autoAlpha: 0,
          y: 150,
          stagger: 0.05,
          delay: 0,
          scrollTrigger: {
            trigger: sectionRef,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        });
      });
    }, 5000);
  }, []);

  useEffect(() => {
    initSmoothScroll(document, 100, 20);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.to(".current", { x: "100%", duration: 4, ease: "power.out" });
    tl.to(".fade", { autoAlpha: 0, duration: 1, onComplete: closePreloader });
    tl.to(".fade-in", { autoAlpha: 1, duration: 1 });
  }, []);

  function closePreloader() {
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Preloader />}

      <div
        className="fade-in"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <Header />
        <Hero />
        <Poster />
        <Company />
        <TwoTickerSection />
        <Mission />
        <Process />
        <Blog />
        <Action />
        <Footer />
      </div>
    </div>
  );
}
