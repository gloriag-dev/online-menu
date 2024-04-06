import { ReactNode } from "react"
import styles from "./DishCard.module.scss"
import { DishComplete } from "../../pages/Menu/Menu"
import Button from "@mui/material/Button"

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
                <p>{dish.name}</p>
                <span>{dish.description}</span>
            </div>
            <div className={styles.flex}>
                <p>Aggiungi a preferiti</p>
                <input
                    type="checkbox"
                    checked={favouriteIds?.includes?.(dish.id)}
                    onChange={e => {
                        toggleFavouriteDish(dish.id, e.target.checked)
                    }}
                />
            </div>
            <div className={styles.flexBtn}>
                <Button variant="contained" onClick={() => handleAdd(dish)} className={styles.primary} color="gold">
                    Aggiungi al carrello
                </Button>
                <Button variant="outlined" onClick={() => handleRemove(dish)} disabled={!disableRemove(dish.id)} color="black">
                    Rimuovi dal carrello
                </Button>
            </div>
        </div>
    )
}

export default DishCard
