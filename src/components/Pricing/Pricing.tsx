import axios from "axios";
import styles from "./pricing.module.scss";
import { useQuery } from "@tanstack/react-query";
export const Pricing = () => {
  const fetchDishes = async () => {
    const res = await axios.get("/dishes");
    return res.data;
  };
  const dishesQuery = useQuery({
    queryKey: ["/dishes"],
    queryFn: fetchDishes,
  });

  console.log(dishesQuery.data, "uywvvwtywcwyc");
  return (
    <div className={styles.main}>
      <div className={styles.capitalizedTitleContainer}>
        <p className={styles.capitalizedTitle}>ABOUT RESTAURANT</p>
        <span className={styles.dot}>.</span>
      </div>
      <h1>Foods Pricing</h1>
      <div className={styles.layout}>
        <section className={styles.pricing}>
          {dishesQuery?.data?.map?.((dish) => {
            return (
              <div className={styles.dishRow}>
                <span className={styles.dishName}>
                  {dish.name}
                  ................................................
                </span>
                <span className={styles.dishPrice}>${dish.price}</span>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
