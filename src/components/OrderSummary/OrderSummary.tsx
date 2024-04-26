import clsx from "clsx"
import useOrderStore from "../../stores/orderStore"
import styles from "./OrderSummary.module.scss"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
type OrderSummaryProps = {
    className?: string
}

export const OrderSummary = ({ className }: OrderSummaryProps) => {
    const orderStore = useOrderStore()
    return (
        <div className={clsx("order-summary", className, styles.orderSummary)}>
            <div className={styles.layout}>
                <p>RIEPILOGO ORDINE</p>
                <p>Totale: {orderStore.total.toFixed(2)}€</p>
                <Link to="/checkout-wizard">
                    <Button variant="contained" className={styles.btn}>
                        Vai al pagamento
                    </Button>
                </Link>
            </div>
        </div>
    )
}
