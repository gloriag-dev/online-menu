import OrderIcon from "../../../../components/Icons/OrderIcon"
import RightArrow from "../../../../components/Icons/RightArrow"
import ServicesIcon from "../../../../components/Icons/ServicesIcon"
import styles from "./AboutRestaurant.module.scss"
import img1 from "../../../../assets/aboutus1.jpg"
import img2 from "../../../../assets/aboutus2.jpg"
import CardWithIcon from "../../../../components/CardWithIcon/CardWithIcon"

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
            <section className={styles.sub}>
                <div className={styles.capitalizedTitleContainer}>
                    <p className={styles.capitalizedTitle}>ABOUT RESTAURANT</p>
                    <span className={styles.dot}>.</span>
                </div>
                <h2 className={styles.h2}>Living Well Begins With Eating Well</h2>

                <section className={styles.cardContainer}>
                    <CardWithIcon className={styles.card} icon={<OrderIcon />} iconContainerClassname={styles.iconContainer} title="Online Order" description="Duis nec semper ligula" />
                    <CardWithIcon className={styles.card} icon={<ServicesIcon />} iconContainerClassname={styles.iconContainer} title="24X7 Services" description="Duis nec semper ligula" />
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
