import clsx from "clsx"
import useOrderStore from "../../stores/orderStore"
import styles from "./OrderBar.module.scss"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

interface OrderBarProps {
    open: boolean
}

export const OrderBar: React.FC<OrderBarProps> = ({ open }) => {
    const orderStore = useOrderStore()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/order")
    }
    const location = useLocation()
    return (
        <section className={clsx(styles.bar, { [styles.open]: open })}>
            <div className={styles.format}>
                TOTAL: <p>{orderStore.total.toFixed(2) + "$"}</p>
            </div>
            {!location.pathname.includes("/checkout") && (
                <Button onClick={handleClick} className={styles.goToOrderBtn}>
                    COMPLETE ORDER
                </Button>
            )}
        </section>
    )
}
