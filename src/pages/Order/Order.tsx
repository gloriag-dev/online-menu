import axios from "axios";
import styles from "./styles.module.scss";
import { useQuery } from "@tanstack/react-query";
import useOrderStore from "../../orderStore";
import { DishComplete } from "../Menu/Menu";
import { Link } from "react-router-dom";

export const Order = () => {
  const orderStore = useOrderStore();
  const fetchDishes = async (): Promise<DishComplete[]> => {
    const res = await axios.get("/dishes");
    return res.data.dishes;
  };
  const dishesQuery = useQuery({
    queryKey: ["/dishes"],
    queryFn: fetchDishes,
  });

  const getenrivhedData = (id: number) => {
    return dishesQuery.data?.find((singleDish) => singleDish.id === id);
  };

  console.log(orderStore.order);
  if (orderStore.total <= 0) {
    return (
      <div>
        <div className={styles.cover}></div>
        <p>EFFETTUA UN ORDINE PRIMA DI ENTRARE QUI</p>
        <Link to='/menu'>Menu</Link>
      </div>
    );
  }
  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.flexCol}>
        <div>RIEPILOGO ORDINE:</div>
        <div>totale:{orderStore.total}</div>
        <Link to='/checkout-wizard/address'>paga</Link>
      </div>
      <div className={styles.centerer}>
        <div className={styles.layout}>
          {orderStore.order.map((single) => {
            const singleDish = getenrivhedData(single.id);

            return (
              <div className={styles.card}>
                <img
                  alt={singleDish?.name}
                  src={singleDish?.imgUrl}
                  className={styles.img}
                />
                <span>
                  {singleDish?.name} -{singleDish?.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
