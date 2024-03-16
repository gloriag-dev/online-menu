import { useQuery } from "@tanstack/react-query";
import styles from "./Menu.module.scss";
import axios from "axios";
import { Star } from "../Icons/Star";
export const Menu = () => {
  const fetchDishes = async () => {
    const res = await axios.get("/dishes");
    return res.data;
  };
  const dishesQuery = useQuery({
    queryKey: ["/dishes"],
    queryFn: fetchDishes,
  });

  const starRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i}>
          <Star className={styles.star} />
        </span>
      ); // Filled star
    }
    return <div>{stars}</div>;
  };

  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.selector}>
            <p>- All Popular Dishes</p>
            <p>- Breakfast</p>
            <p>- Lunches</p>
            <p>- Dinner</p>
            <p>- Drinks</p>
            <p>- Fast Foods</p>
            <p>- Dessert</p>
          </section>
        </div>
        <section className={styles.menu}>
          {dishesQuery?.data?.map?.((dish) => (
            <div className={styles.menuItem}>
              <img src={dish.imgUrl} className={styles.img} />
              <div className={styles.itemText}>
                {starRating(dish.rating)}
                <p>{dish.name}</p>
                <span>{dish.description}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
