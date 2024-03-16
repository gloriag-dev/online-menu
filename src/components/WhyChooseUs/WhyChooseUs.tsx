import Delivery from "../Icons/Delivery";
import { Food } from "../Icons/Food";
import { Recipes } from "../Icons/Recipes";
import styles from "./styles.module.scss";
export const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Why Choose Us .</p>
        <h2>The Health Food for Wealthy Mood</h2>
        <div className={styles.carousel}>
          <div className={styles.transparentCard}>
            <Food />
            <p>Quality Food</p>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris.
            </p>
          </div>
          <div className={styles.card}>
            <Delivery />
            <p>Fastest Delivery</p>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris.
            </p>
          </div>
          <div className={styles.transparentCard}>
            <Recipes />
            <p>Original Recipes</p>
            <p>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
