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
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import smoothScroll from "@/utils/smoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((sectionRef) => {
            const gsapItems = Array.from(sectionRef.children).flatMap((child) =>
                Array.from(child.querySelectorAll(".reveal"))
            );

            gsap.from(gsapItems, {
                opacity: 0,
                y: 150,
                stagger: 0.05,
                delay: 0.5,
                scrollTrigger: {
                trigger: sectionRef,
                start: "top 100%",
                toggleActions: "play none none none",
                },
            });
        });
    }, []);
    
    useEffect(() => {
        smoothScroll();
    }, [])

  return (
    <div id="viewport">
        <Header />
        <div id="content">
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