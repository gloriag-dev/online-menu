import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Gallery } from "./components/Gallery/Gallery";
import { Menu } from "./components/Menu/Menu";
import { Contact } from "./components/Contact/Contact";

const Routing = () => {
  return (
    <main>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </main>
  );
};
export default Routing;
