import { useQuery } from "@tanstack/react-query";
import styles from "./Menu.module.scss";
import axios from "axios";
import { Star } from "../../components/Icons/Star";
import useDishStore from "../../dishStore";
import useOrderStore from "../../orderStore";

export interface DishComplete {
  id: number;
  imgUrl: string;
  description: string;
  price: number;
  name: string;
  rating: number;
}

export const Menu = () => {
  const { favouriteIds, toggleFavouriteDish } = useDishStore();
  const { addToOrder } = useOrderStore();

  const fetchDishes = async (): Promise<DishComplete[]> => {
    const res = await axios.get("/dishes");
    return res.data.dishes;
  };
  const dishesQuery = useQuery({
    queryKey: ["/dishes"],
    queryFn: fetchDishes,
  });

  const starRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i}>
          <Star className={styles.star} />
        </span>
      );
    }
    return <div>{stars}</div>;
  };
  const handleClick = (dish: DishComplete) => (e) => {
    addToOrder(dish.id, dish.price);

    console.log("added", dish.id, dish.price);
  };

  if (dishesQuery.isLoading) {
    return <p>loading </p>;
  }
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
            <div className={styles.menuItem} key={dish.id}>
              <img alt={dish.name} src={dish.imgUrl} className={styles.img} />
              <div className={styles.itemText}>
                {starRating(dish.rating)}
                <p>{dish.name}</p>
                <span>{dish.description}</span>
              </div>
              <div className={styles.flex}>
                <p>Aggiungi a preferiti</p>
                <input
                  type='checkbox'
                  checked={favouriteIds?.includes?.(dish.id)}
                  onChange={(e) => {
                    toggleFavouriteDish(dish.id, e.target.checked);
                  }}
                />
              </div>
              <div className={styles.flex}>
                <button onClick={handleClick(dish)}>
                  Aggiungi al carrello
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
