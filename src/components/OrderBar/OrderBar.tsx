import useOrderStore from "../../stores/orderStore"
import styles from "./OrderBar.module.scss"

export const OrderBar = () => {
    const orderStore = useOrderStore()

    console.log(orderStore.order)

    const getNames = () => {
        const names = orderStore.order.map(single => single.name)
        return names
    }
    return (
        <div className={styles.bar}>
            totale: <p>{orderStore.total.toFixed(2)}</p>
            <p>{getNames()}</p>
        </div>
    )
}
