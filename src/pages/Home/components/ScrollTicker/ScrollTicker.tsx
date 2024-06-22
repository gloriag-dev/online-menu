import { Box } from "../../../../components/Box/Box"
import styles from "./styles.module.scss"
export const ScrollTicker = () => {
    return (
        <Box className={styles.line}>
            <p className={styles.marquee}>
                <span>~ Vegetables Burger ~ Lemon Tea ~ Noodles ~ Fried Potatoes ~ Bone Steak ~ Aloo Gobi ~ Black Cold Coffee ~ Delicious Dosas ~</span>
            </p>
        </Box>
    )
}
