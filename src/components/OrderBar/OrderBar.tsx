import clsx from "clsx"
import useOrderStore from "../../stores/orderStore"
import styles from "./OrderBar.module.scss"

interface OrderBarProps {
    open: boolean
}

export const OrderBar: React.FC<OrderBarProps> = ({ open }) => {
    const orderStore = useOrderStore()

    return (
        <section className={clsx(styles.bar, { [styles.open]: open })}>
            <div className={styles.format}>
                TOTAL: <p>{orderStore.total.toFixed(2) + "€"}</p>
            </div>
        </section>
    )
}
