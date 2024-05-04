import Delivery from "../../../../components/Icons/Delivery"
import { Food } from "../../../../components/Icons/Food"
import { Recipes } from "../../../../components/Icons/Recipes"
import styles from "./styles.module.scss"
export const WhyChooseUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.capitalizedTitleContainer}>
                    <p className={styles.capitalizedTitle}>WHY CHOOSE US</p>
                    <span className={styles.dot}>.</span>
                </div>
                <h2>The Healthy Food for Wealthy Mood</h2>
                <div className={styles.carousel}>
                    <div className={styles.transparentCard}>
                        <Food className={styles.icon} />
                        <p>Quality Food</p>
                        <p className={styles.description}>Enjoy a variety of meal options, from world cuisines to family favorites.</p>
                    </div>
                    <div className={styles.card}>
                        <Delivery className={styles.icon} />
                        <p>Fastest Delivery</p>
                        <p className={styles.description}>Choose a delivery slot and have your meals delivered to your door.</p>
                    </div>
                    <div className={styles.transparentCard}>
                        <Recipes className={styles.icon} />
                        <p>Original Recipes</p>
                        <p className={styles.description}>Explore a diverse range of food options to satisfy your cravings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
