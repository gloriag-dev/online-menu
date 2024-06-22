import axios from "axios"
import OrderCard from "../../../components/OrderCard/OrderCard"
import useOrderStore from "../../../stores/orderStore"
import { useQuery } from "@tanstack/react-query"
import { DishComplete } from "../../Menu/Menu"
import styles from "./styles.module.scss"
import { Logo } from "../../../components/Icons/Logo"
import useUserStore from "../../../stores/userStore"
import { Box } from "../../../components/Box/Box"

export const ThankYou = () => {
    const orderStore = useOrderStore()
    const userStore = useUserStore()
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
    const text = `Thank you ${userStore.name}! Your delicious order is on its way!`
    return (
        <Box className={styles.main}>
            <Box className={styles.logoWrapper}>
                <Logo width={200} height={200} />
            </Box>
            <Box className={styles.titleWrapper}>
                <h1 className={styles.title}>{text}</h1>
            </Box>
            <Box className={styles.cardsContainer}>
                {orderStore.order.map(single => {
                    const singleDish = findDishById(single.id)
                    return <OrderCard imgAlt={singleDish?.name} imgUrl={singleDish?.imgUrl} name={singleDish?.name} id={singleDish?.id} />
                })}
            </Box>
        </Box>
    )
}

export default ThankYou
