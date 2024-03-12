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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import initSmoothScroll from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const isLoading = useRef(true);

  useEffect(() => {
    // smooth scroll initiation
    initSmoothScroll(document, 100, 20);

    // parallax animation
    const parallaxes = document.querySelectorAll('[data-animation="parallax"]');
    parallaxes.forEach((parallax) => {
      gsap.to(parallax, {
        yPercent: 30,
        scrollTrigger: {
          trigger: parallax,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // preloader animation
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.to(".current", { x: "100%", duration: 4, ease: "power.out" });
    tl.to(".fade", { autoAlpha: 0, duration: 1, onComplete: closePreloader });
    tl.from(".fade-in", { autoAlpha: 0, duration: 0.25, delay: 0.5 });
  }, []);

  // text appear when section gets to viewport
  function registerAppearAnimations() {
    const sectionRefs = document.querySelectorAll(".section");
    // loop through sections,every child with class reveal into array
    sectionRefs.forEach((sectionRef) => {
      const gsapItems = Array.from(sectionRef.children).flatMap((child) =>
        Array.from(child.querySelectorAll(".reveal"))
      );

      gsap.from(gsapItems, {
        autoAlpha: 0,
        y: 150,
        stagger: 0.05,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });
  }

  function closePreloader() {
    isLoading.current = false;
    registerAppearAnimations();
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
