import clsx from "clsx"
import styles from "./OrderCard.module.scss"
import RoundButton from "../RoundButton/RoundButton"

export type OrderCardProps = {
    imgAlt?: string
    imgUrl?: string
    name?: string
    quantity?: number
    price?: number
    className?: string
    id?: number
    handleRemove?: (id: number) => void
}
export const OrderCard = ({ imgAlt, imgUrl, name, price, handleRemove, id, quantity }: OrderCardProps) => {
    const onClickOrderCard = () => {
        if (id) handleRemove?.(id)
    }
    return (
        <section className={styles.container}>
            <div className={clsx("order-card", styles.card)}>
                <div className={styles.main}>
                    <div>
                        <img alt={imgAlt} src={imgUrl} className={styles.img} />
                    </div>

                    <div className={styles.info}>
                        <span className={styles.infoText}>{name}</span>
                        <span className={styles.infoText}>
                            {price}$ {quantity && quantity > 1 && "x" + quantity}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <RoundButton className={styles.removeItemBtn} onClick={onClickOrderCard} children={<span>&#45;</span>}></RoundButton>
            </div>
        </section>
    )
}

export default OrderCard
