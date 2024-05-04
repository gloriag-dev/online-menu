import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Menu } from "./pages/Menu/Menu"
import { AuthLoginCallback } from "./auth/AuthLoginCallback/AuthLoginCallBack"
import { Order } from "./pages/Order/Order"
import Wizard from "./pages/CheckoutWizard"

const Routing = () => {
    return (
        <Routes>
            <Route path="/auth/login/callback" element={<AuthLoginCallback />} />
            <Route path="/*" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout-wizard*" element={<Wizard />} />
        </Routes>
    )
}
export default Routing
