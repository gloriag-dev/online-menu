import { AuthorizationGateway } from "../../auth/AuthorizationGateway/AuthorizationGateway"
import styles from "./Hero.module.scss"
export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.capitalizedTitleContainer}>
                <p className={styles.capitalizedTitle}>WELCOME TO FWIZZ</p>
                <span className={styles.dot}>.</span>
            </div>

            <h1 className={styles.heroTitle}>Taste flavours from</h1>
            <h1 className={styles.heroTitle}> Around the world</h1>
            <p>Treat yourself to a culinary journey like no other with Fwizz! Whether you're looking for a quick and delicious meal or planning a special occasion, we have the perfect dish for every moment.</p>
            <p>Order now and savor the exquisite flavors of Fwizz!</p>
            <AuthorizationGateway />
            <div className={styles.downArrow}> &darr;</div>
        </div>
    )
}
export default Hero
