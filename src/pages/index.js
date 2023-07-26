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
import { useRef } from "react";
import initSmoothScroll from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRefs = useRef([]);


  useEffect(() => {
    setTimeout(() => {
      sectionRefs.current.forEach((sectionRef) => {
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
    tl.to(".fade", { opacity: 0, duration: 1, onComplete: closePreloader });
  }, []);

  function closePreloader() {
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Preloader />}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Header />
      </div>
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Hero ref={(el) => sectionRefs.current.push(el)} />
        <Poster ref={(el) => sectionRefs.current.push(el)} />
        <Company ref={(el) => sectionRefs.current.push(el)} />
        <TwoTickerSection />
        <Mission ref={(el) => sectionRefs.current.push(el)} />
        <Process ref={(el) => sectionRefs.current.push(el)} />
        <Blog ref={(el) => sectionRefs.current.push(el)} />
        <Action ref={(el) => sectionRefs.current.push(el)} />
        <Footer />
      </div>
    </div>
  );
}
