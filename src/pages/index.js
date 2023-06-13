import { Header } from "@/components/Header/Header"
import { Hero } from "@/components/Hero/Hero"
import { Poster } from "@/components/Poster/Poster"
import { Company } from "@/components/Company/Company"
import { Ticker } from "@/components/Ticker/Ticker"
import { Mission } from "@/components/Mission/Mission"

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Poster />
            <Company />
            <Ticker />
            <Mission />
        </>
    )
}