import axios from "axios"
import OrderCard from "../../../components/OrderCard/OrderCard"
import useOrderStore from "../../../stores/orderStore"
import { useQuery } from "@tanstack/react-query"
import { DishComplete } from "../../Menu/Menu"
import styles from "./styles.module.scss"

export const ThankYou = () => {
    const orderStore = useOrderStore()
    const fetchDishes = async (): Promise<DishComplete[]> => {
        const res = await axios.get("/dishes")
        return res.data.dishes
    }

    const dishesQuery = useQuery({
        queryKey: ["/dishes"],
        queryFn: fetchDishes
    })
    const findDishById = (id: number) => {
        return dishesQuery.data?.find(singleDish => singleDish.id === id)
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Thank you. Your delicious order is on its way!</h1>

            <div className={styles.cardsContainer}>
                {orderStore.order.map(single => {
                    const singleDish = findDishById(single.id)
                    return <OrderCard quantity={single.quantity} imgAlt={singleDish?.name} imgUrl={singleDish?.imgUrl} name={singleDish?.name} price={singleDish?.price} id={singleDish?.id} />
                })}
            </div>
        </div>
    )
}

export default ThankYou
