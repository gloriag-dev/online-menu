import { useQuery } from "@tanstack/react-query"
import styles from "./Menu.module.scss"
import axios from "axios"
import { Star } from "../../components/Icons/Star"
import useDishStore from "../../stores/dishStore"
import useOrderStore from "../../stores/orderStore"
import { OrderBar } from "../../components/OrderBar/OrderBar"
import DishCard from "../../components/DishCard/DishCard"
import Loader from "../Home/components/Loader/Loader"

export interface DishComplete {
    id: number
    imgUrl: string
    description: string
    price: number
    name: string
    rating: number
}

export const Menu = () => {
    const { favouriteIds, toggleFavouriteDish } = useDishStore()
    const { addToOrder, removeFromOrder, order } = useOrderStore()

    const fetchDishes = async (): Promise<DishComplete[]> => {
        const res = await axios.get("/dishes")
        return res.data.dishes
    }
    const dishesQuery = useQuery({
        queryKey: ["/dishes"],
        queryFn: fetchDishes
    })

    const disableRemove = (id: number) => {
        const dishToRemove = order.findIndex(dish => dish.id === id)
        return dishToRemove !== -1
    }
    const starRating = (rating: number) => {
        const stars = []
        for (let i = 1; i <= rating; i++) {
            stars.push(
                <span key={i}>
                    <Star className={styles.star} />
                </span>
            )
        }
        return <div>{stars}</div>
    }
    const handleAdd = (dish: DishComplete) => () => {
        addToOrder(dish.id, dish.price, dish.name)
    }

    const handleRemove = (dish: DishComplete) => {
        removeFromOrder(dish.id)
    }
    if (dishesQuery.isLoading) {
        return <Loader />
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
                    {dishesQuery?.data?.map?.(dish => (
                        <DishCard
                            key={dish.id}
                            dish={dish}
                            disableRemove={disableRemove}
                            favouriteIds={favouriteIds}
                            handleAdd={handleAdd(dish)}
                            handleRemove={() => handleRemove(dish)}
                            starRating={() => starRating(dish.rating)}
                            toggleFavouriteDish={toggleFavouriteDish}
                        />
                    ))}
                </section>
            </div>
            <OrderBar />
        </>
    )
}
