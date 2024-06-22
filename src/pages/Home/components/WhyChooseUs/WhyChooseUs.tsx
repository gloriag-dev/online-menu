import { Box } from "../../../../components/Box/Box"
import Delivery from "../../../../components/Icons/Delivery"
import { Food } from "../../../../components/Icons/Food"
import { Recipes } from "../../../../components/Icons/Recipes"
import styles from "./styles.module.scss"
export const WhyChooseUs = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.main}>
                <Box className={styles.capitalizedTitleContainer}>
                    <p className={styles.capitalizedTitle}>WHY CHOOSE US</p>
                    <span className={styles.dot}>.</span>
                </Box>
                <h2>The Healthy Food for Wealthy Mood</h2>
                <Box className={styles.carousel}>
                    <Box className={styles.transparentCard}>
                        <Food className={styles.icon} />
                        <p className={styles.title}>Quality Food</p>
                        <p className={styles.description}>Enjoy a variety of meal options, from world cuisines to family favorites.</p>
                    </Box>
                    <Box className={styles.card}>
                        <Delivery className={styles.icon} />
                        <p className={styles.title}>Fastest Delivery</p>
                        <p className={styles.description}>Choose a delivery slot and have your meals delivered to your door.</p>
                    </Box>
                    <Box className={styles.transparentCard}>
                        <Recipes className={styles.icon} />
                        <p className={styles.title}>Original Recipes</p>
                        <p className={styles.description}>Explore a diverse range of food options to satisfy your cravings.</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
