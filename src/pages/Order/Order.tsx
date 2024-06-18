import axios from "axios"
import styles from "./styles.module.scss"
import { useQuery } from "@tanstack/react-query"
import useOrderStore from "../../stores/orderStore"
import { DishComplete } from "../Menu/Menu"
import { Link } from "react-router-dom"
import { Loader } from "../Home/components/Loader/Loader"
import OrderCard from "../../components/OrderCard/OrderCard"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"

export const Order = () => {
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

    if (orderStore.total <= 0) {
        return (
            <div>
                <div className={styles.cover}></div>
                <p>EFFETTUA UN ORDINE PRIMA DI ENTRARE QUI</p>
                <Link to="/menu">Menu</Link>
            </div>
        )
    }
    if (dishesQuery.isLoading) {
        return <Loader />
    }

    const handleRemove = (id: number) => {
        orderStore.removeFromOrder(id)
    }
    return (
        <>
            <div className={styles.cover}></div>

            <div className={styles.layout}>
                <div className={styles.cardsContainer}>
                    {orderStore.order.map(single => {
                        const singleDish = findDishById(single.id)

                        return (
                            <OrderCard
                                key={single.id}
                                quantity={single.quantity}
                                imgAlt={singleDish?.name}
                                imgUrl={singleDish?.imgUrl}
                                name={singleDish?.name}
                                price={singleDish?.price}
                                handleRemove={handleRemove}
                                id={singleDish?.id}
                            />
                        )
                    })}
                </div>
                <OrderSummary />
            </div>
        </>
    )
}
