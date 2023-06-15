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

export default function Home() {
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