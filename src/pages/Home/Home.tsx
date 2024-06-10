import Hero from "../../components/Hero"
import { AboutRestaurant } from "./components/AboutRestaurant/AboutRestaurant"
import { ScrollTicker } from "./components/ScrollTicker/ScrollTicker"
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs"

export const Home = () => {
    return (
        <>
            <Hero />
            <AboutRestaurant />
            <WhyChooseUs />
            {/* <Pricing /> */}
            <ScrollTicker />
        </>
    )
}
export default Home
