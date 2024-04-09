import useOrderStore from "../../stores/orderStore"
import styles from "./OrderBar.module.scss"

export const OrderBar = () => {
    const orderStore = useOrderStore()

    console.log(orderStore.order)

    const getNames = () => {
        const names = orderStore.order.map(single => single.name + " - ")
        return <p className={styles.namesbar}>{names}</p>
    }
    return (
        <section className={styles.bar}>
            <div className={styles.format}>
                TOTAL: <p>{orderStore.total.toFixed(2) + "$"}</p>
            </div>
            <div className={styles.namesbar}>{getNames()}</div>
        </section>
    )
}
