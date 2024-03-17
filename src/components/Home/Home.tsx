import { AboutRestaurant } from "../AboutRestaurant/AboutRestaurant";
import Hero from "../Hero";
import { Pricing } from "../Pricing/Pricing";
import { ScrollTicker } from "../ScrollTicker/ScrollTicker";
import { WhyChooseUs } from "../WhyChooseUs/WhyChooseUs";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutRestaurant />
      <WhyChooseUs />
      {/* <Menu /> */}
      <Pricing />
      <ScrollTicker />
    </>
  );
};
export default Home;
