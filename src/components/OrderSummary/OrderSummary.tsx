import clsx from "clsx"
import useOrderStore from "../../stores/orderStore"
import styles from "./OrderSummary.module.scss"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"
type OrderSummaryProps = {
    className?: string
}

export const OrderSummary = ({ className }: OrderSummaryProps) => {
    const orderStore = useOrderStore()
    const navigate = useNavigate()
   
    const handleClick = () => {
        navigate('checkout-wizard/address' );
    }

    return (
        <div className={clsx("order-summary", className, styles.orderSummary)}>
            <div className={styles.layout}>
                <p>YOUR ORDER:</p>
                <p>Total: {orderStore.total.toFixed(2)}€</p>
                <Link to="/checkout-wizard">
                    <Button variant="contained" className={styles.btn} onClick={handleClick}>
                        Go to checkout
                    </Button>
                </Link>
            </div>
        </div>
    )
}
