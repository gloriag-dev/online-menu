import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { AboutUs } from "./pages/AboutUs/AboutUs"

import { Menu } from "./pages/Menu/Menu"
import { Contact } from "./pages/Contact/Contact"
import { AuthLoginCallback } from "./auth/AuthLoginCallback/AuthLoginCallBack"
import { Order } from "./pages/Order/Order"

import { Wrapper } from "./components/Wrapper/Wrapper"
import Wizard from "./pages/CheckoutWizard"

const Routing = () => {
    return (
        <Routes>
            <Route path="/auth/login/callback" element={<AuthLoginCallback />} />
            <Route path="/*" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route
                path="/checkout-wizard*"
                element={
                    <Wrapper>
                        <Wizard />
                    </Wrapper>
                }
            />
        </Routes>
    )
}
export default Routing
