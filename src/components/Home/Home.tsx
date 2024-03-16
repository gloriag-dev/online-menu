import { AboutRestaurant } from "../AboutRestaurant/AboutRestaurant";
import Hero from "../Hero";
import { WhyChooseUs } from "../WhyChooseUs/WhyChooseUs";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutRestaurant />
      <WhyChooseUs />
    </>
  );
};
export default Home;
