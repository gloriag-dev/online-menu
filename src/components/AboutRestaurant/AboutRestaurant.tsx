import OrderIcon from "../Icons/OrderIcon";
import RightArrow from "../Icons/RightArrow";
import ServicesIcon from "../Icons/ServicesIcon";
import styles from "./AboutRestaurant.module.scss";
export const AboutRestaurant = () => {
  return (
    <div className={styles.main}>
      <section className={styles.imgWrapper}>
        <img
          src='https://demo.awaikenthemes.com/html-preview/fwizz/html/images/about-us-1.jpg'
          alt='cook'
        />

        <img
          src='https://demo.awaikenthemes.com/html-preview/fwizz/html/images/about-us-2.jpg'
          alt='cook'
        />
        <div className={styles.roundYellow}>
          <p className={styles.roundYellowText}>Since 1870</p>
        </div>
      </section>
      <section>
        <p>
          About restaurant <span>.</span>
          <h2>Living Well Begins With Eating Well</h2>
        </p>
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
  );
};
