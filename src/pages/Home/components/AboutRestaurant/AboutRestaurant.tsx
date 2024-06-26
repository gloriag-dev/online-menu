import OrderIcon from "../../../../components/Icons/OrderIcon"
import ServicesIcon from "../../../../components/Icons/ServicesIcon"
import styles from "./AboutRestaurant.module.scss"
import img1 from "../../../../assets/aboutus1.jpg"
import img2 from "../../../../assets/aboutus2.jpg"
import CardWithIcon from "../../../../components/CardWithIcon/CardWithIcon"
import { Box } from "../../../../components/Box/Box"

export const AboutRestaurant = () => {
    return (
        <Box className={styles.main}>
            <Box as="section" className={styles.imgWrapper}>
                <img src={img1} alt="cook" />
                <img src={img2} alt="cook" />
                <Box className={styles.roundgold}>
                    <p className={styles.roundgoldText}>Since 1870</p>
                </Box>
            </Box>
            <Box as="section" className={styles.sub}>
                <Box className={styles.capitalizedTitleContainer}>
                    <p className={styles.capitalizedTitle}>ABOUT RESTAURANT</p>
                    <span className={styles.dot}>.</span>
                </Box>
                <h2 className={styles.h2}>Living Well Begins With Eating Well</h2>

                <Box as="section" className={styles.cardContainer}>
                    <CardWithIcon className={styles.card} icon={<OrderIcon />} iconContainerClassname={styles.iconContainer} title="Online Order" description="Order from your couch..." />
                    <CardWithIcon
                        className={styles.card}
                        icon={<ServicesIcon />}
                        iconContainerClassname={styles.iconContainer}
                        title="24X7 Services"
                        description="...and get our finest meals within 20 minutes!"
                    />
                </Box>
            </Box>
        </Box>
    )
}
