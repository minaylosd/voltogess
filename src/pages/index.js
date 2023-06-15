import { Header } from "@/components/Header/Header"
import { Hero } from "@/components/Hero/Hero"
import { Poster } from "@/components/Poster/Poster"
import { Company } from "@/components/Company/Company"
import { TwoTickerSection } from "@/components/TwoTickerSection/TwoTickerSection"
import { Mission } from "@/components/Mission/Mission"
import { Process } from "@/components/Process/Process"
import { Blog } from "@/components/Blog/Blog"
import { Action } from "@/components/Action/Action"
import { Footer } from "@/components/Footer/Footer"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export default function Home() {
    useEffect (() => {
        gsap.from(".reveal", {
            scrollTrigger: ".reveal",
            opacity: 0,
            y: "100%",
            stagger: 0.025,
            delay: 0.1
        });
    });

    return (
        <>
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
        </>
    )
}