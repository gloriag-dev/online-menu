import { useQuery } from "@tanstack/react-query"
import styles from "./Menu.module.scss"
import axios from "axios"
import { Star } from "../../components/Icons/Star"
import useDishStore from "../../stores/dishStore"
import useOrderStore from "../../stores/orderStore"
import { OrderBar } from "../../components/OrderBar/OrderBar"
import DishCard from "../../components/DishCard/DishCard"
import Loader from "../Home/components/Loader/Loader"
import { useState } from "react"
import { Selector } from "../../components/Selector/Selector"
import clsx from "clsx"

export type Category = {
    label: string
    id: string
}

const categories = [
    {
        label: "Breakfasts",
        id: "breakfasts"
    },
    {
        label: "Lunches",
        id: "lunches"
    },
    {
        label: "Dinners",
        id: "dinners"
    },
    {
        label: "Drinks",
        id: "drinks"
    },
    {
        label: "Fast foods",
        id: "fast foods"
    },
    {
        label: "Desserts",
        id: "desserts"
    }
]

export interface DishComplete {
    id: number
    imgUrl: string
    description: string
    price: number
    name: string
    rating: number
}

export const Menu = () => {
    const [categoryId, setCategoryId] = useState<string>("")
    const { favouriteIds, toggleFavouriteDish } = useDishStore()
    const { addToOrder, removeFromOrder, order } = useOrderStore()
    const fetchDishes = async (): Promise<DishComplete[]> => {
        const res = await axios.get("/dishes", { params: { categoryId } })
        return res.data.dishes
    }
    const dishesQuery = useQuery({
        queryKey: ["/dishes", categoryId],
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
                <div className={styles.centeredWrapper}>
                    <div className={styles.leftCol}>
                        <Selector onSetCategory={setCategoryId} categories={categories} categoryId={categoryId}/>
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
            </div>
            <OrderBar open={order.length > 0} />
        </>
    )
}
export default Menu
