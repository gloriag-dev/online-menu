import { ReactNode } from "react"
import styles from "./DishCard.module.scss"
import { DishComplete } from "../../pages/Menu/Menu"

export type DishCardProps = {
    dish: DishComplete
    starRating: (rating: number) => ReactNode
    handleAdd: (dish: DishComplete) => void
    handleRemove: (dish: DishComplete) => void
    disableRemove: (id: number) => boolean
    toggleFavouriteDish: (dishId: number, favorite: boolean) => void
    favouriteIds: number[]
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
            <div className={styles.flex}>
                <button onClick={() => handleAdd(dish)}>Aggiungi al carrello</button>
                <button onClick={() => handleRemove(dish)} disabled={!disableRemove(dish.id)}>
                    Rimuovi dal carrello
                </button>
            </div>
        </div>
    )
}

export default DishCard
