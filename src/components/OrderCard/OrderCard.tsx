import clsx from "clsx"
import styles from "./OrderCard.module.scss"
import RoundButton from "../RoundButton/RoundButton"
import { Box } from "../Box/Box"

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
export const OrderCard = ({ imgAlt, imgUrl, name, price, handleRemove, id, quantity, className }: OrderCardProps) => {
    const onClickOrderCard = () => {
        if (id) handleRemove?.(id)
    }
    const shouldShowRoundButton = !window.location.pathname.includes("/checkout-wizard/thank-you")
    console.log(window.location.pathname)
    return (
        <section className={clsx(styles.container, className)}>
            <Box className={clsx("order-card", styles.card)}>
                <Box className={styles.main}>
                    <Box>
                        <img alt={imgAlt} src={imgUrl} className={styles.img} />
                    </Box>

                    <Box className={styles.info}>
                        <span className={styles.infoText}>{name}</span>
                        {price && (
                            <span className={styles.infoText}>
                                {price}$ {quantity && quantity > 1 && "x" + quantity}
                            </span>
                        )}
                    </Box>
                </Box>
            </Box>
            {shouldShowRoundButton && (
                <Box className={styles.btnContainer}>
                    <RoundButton className={styles.removeItemBtn} onClick={onClickOrderCard} children={<span>&#45;</span>}></RoundButton>
                </Box>
            )}
        </section>
    )
}

export default OrderCard
