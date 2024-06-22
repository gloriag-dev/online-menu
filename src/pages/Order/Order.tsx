import axios from "axios"
import styles from "./styles.module.scss"
import { useQuery } from "@tanstack/react-query"
import useOrderStore from "../../stores/orderStore"
import { DishComplete } from "../Menu/Menu"
import { Link } from "react-router-dom"
import { Loader } from "../Home/components/Loader/Loader"
import OrderCard from "../../components/OrderCard/OrderCard"
import { OrderSummary } from "../../components/OrderSummary/OrderSummary"
import { Box } from "../../components/Box/Box"

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
            <Box>
                <Box className={styles.cover}></Box>
                <p>EFFETTUA UN ORDINE PRIMA DI ENTRARE QUI</p>
                <Link to="/menu">Menu</Link>
            </Box>
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
            <Box className={styles.cover}></Box>

            <Box className={styles.layout}>
                <Box className={styles.cardsContainer}>
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
                </Box>
                <OrderSummary />
            </Box>
        </>
    )
}
