import OrderIcon from "../../../../components/Icons/OrderIcon"
import RightArrow from "../../../../components/Icons/RightArrow"
import ServicesIcon from "../../../../components/Icons/ServicesIcon"
import styles from "./AboutRestaurant.module.scss"
import img1 from "../../../../assets/aboutus1.jpg"
import img2 from "../../../../assets/aboutus2.jpg"

export const AboutRestaurant = () => {
    return (
        <div className={styles.main}>
            <section className={styles.imgWrapper}>
                <img src={img1} alt="cook" />

                <img src={img2} alt="cook" />
                <div className={styles.roundgold}>
                    <p className={styles.roundgoldText}>Since 1870</p>
                </div>
            </section>
            <section>
                <div className={styles.capitalizedTitleContainer}>
                    <p className={styles.capitalizedTitle}>ABOUT RESTAURANT</p>
                    <span className={styles.dot}>.</span>
                </div>
                <h2>Living Well Begins With Eating Well</h2>

                <section className={styles.cardContainer}>
                    <div className={styles.card}>
                        <OrderIcon />
                        <span>Online Order</span>
                        <p>Duis nec semper ligula</p>
                    </div>
                    <div className={styles.card}>
                        <ServicesIcon />
                        <span>24X7 Services</span>
                        <p>Duis nec semper ligula</p>
                    </div>
                </section>
                <button className={styles.primaryBtn}>
                    Book Now
                    <div className={styles.icon}>
                        <RightArrow />
                    </div>
                </button>
            </section>
        </div>
    )
}
