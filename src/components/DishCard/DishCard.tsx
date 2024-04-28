import { ReactNode } from "react"
import styles from "./DishCard.module.scss"
import { DishComplete } from "../../pages/Menu/Menu"
import Button from "@mui/material/Button"
import {} from "@mui/material"
import {} from "react-router-dom"
import AddToFavoritesButton from "../AddToFavoritesButton/AddToFavoritesButton"

export type DishCardProps = {
    dish: DishComplete
    starRating: (rating: number) => ReactNode
    handleAdd: (dish: DishComplete) => void
    handleRemove: (dish: DishComplete) => void
    disableRemove: (id: number) => boolean
    toggleFavouriteDish: (dishId: number, favorite: boolean) => void
    favouriteIds: number[]
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        gold: true
        black: true
    }
}

export const DishCard = ({ dish, starRating, handleAdd, favouriteIds, handleRemove, disableRemove, toggleFavouriteDish }: DishCardProps) => {
    return (
        <div className={styles.menuItem} key={dish.id}>
            <img alt={dish.name} src={dish.imgUrl} className={styles.img} />
            <div className={styles.itemText}>
                {starRating(dish.rating)}
                <p className={styles.name}>{dish.name}</p>
                <span>{dish.description}</span>
            </div>
            <div className={styles.flex}>
                <AddToFavoritesButton
                    className={styles.addToFavoriteButton}
                    clicked={favouriteIds?.includes?.(dish.id)}
                    onClick={e => {
                        toggleFavouriteDish(dish.id, e)
                    }}
                />
            </div>
            <div className={styles.flexBtn}>
                <Button variant="contained" onClick={() => handleAdd(dish)} className={styles.primary} color="gold">
                    Add to order
                </Button>
                <Button variant="outlined" onClick={() => handleRemove(dish)} disabled={!disableRemove(dish.id)} color="black">
                    Remove from order
                </Button>
            </div>
        </div>
    )
}

export default DishCard
