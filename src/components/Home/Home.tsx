import { AboutRestaurant } from "../AboutRestaurant/AboutRestaurant";
import Hero from "../Hero";
import { Menu } from "../Menu/Menu";
import { ScrollTicker } from "../ScrollTicker/ScrollTicker";
import { WhyChooseUs } from "../WhyChooseUs/WhyChooseUs";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutRestaurant />
      <WhyChooseUs />
      <Menu />
      <ScrollTicker />
    </>
  );
};
export default Home;
