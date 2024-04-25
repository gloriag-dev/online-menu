import clsx from "clsx"
import styles from "./OrderCard.module.scss"

type OrderCardProps = {
    imgAlt?: string
    imgUrl?: string
    name?: string
    price?: number
    className?: string
}
export const OrderCard = ({ imgAlt, imgUrl, name, price }: OrderCardProps) => {
    return (
        <div className={clsx("order-card", styles.card)}>
            <div>
                <img alt={imgAlt} src={imgUrl} className={styles.img} />
            </div>
            <div className={styles.info}>
                <span className={styles.infoText}>{name}</span>
                <span className={styles.infoText}>{price}</span>
            </div>
        </div>
    )
}

export default OrderCard
