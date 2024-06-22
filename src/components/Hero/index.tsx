import { AuthorizationGateway } from "../../auth/AuthorizationGateway/AuthorizationGateway"
import { Box } from "../Box/Box"
import styles from "./Hero.module.scss"
export const Hero = () => {
    return (
        <Box className={styles.hero}>
            <Box className={styles.capitalizedTitleContainer}>
                <p className={styles.capitalizedTitle}>WELCOME TO FWIZZ</p>
                <span className={styles.dot}>.</span>
            </Box>

            <h1 className={styles.heroTitle}>Taste flavours from</h1>
            <h1 className={styles.heroTitle}> Around the world</h1>
            <p>
                Treat yourself to a culinary journey like no other with Fwizz! Whether you're looking for a quick and delicious meal or planning a special occasion, we have the perfect dish for every
                moment.
            </p>
            <p>Order now and savor the exquisite flavors of Fwizz!</p>
            <AuthorizationGateway />
            <Box className={styles.downArrow}> &darr;</Box>
        </Box>
    )
}
export default Hero
