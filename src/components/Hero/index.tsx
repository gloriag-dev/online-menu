import { AuthorizationGateway } from "../../auth/AuthorizationGateway/AuthorizationGateway"
import styles from "./Hero.module.scss"
export const Hero = () => {
    return (
        <div className={styles.hero}>
            <AuthorizationGateway />
            <div className={styles.capitalizedTitleContainer}>
                <p className={styles.capitalizedTitle}>WELCOME TO FWIZZ</p>
                <span className={styles.dot}>.</span>
            </div>
            <h1 className={styles.heroTitle}>Taste flavours from</h1>
            <h1 className={styles.heroTitle}> Around the world</h1>
            <p>Duis nec semper ligula. Nullam nec justo vel metus gravida consequat.</p>
            <p>Suspendisse potenti. Quisque fermentum, nisl vitae auctor commodo, justo metus tincidunt elit.</p>
            <div className={styles.downArrow}> &darr;</div>
        </div>
    )
}
export default Hero
