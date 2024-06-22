import { ReactNode } from "react"
import styles from "./DishCard.module.scss"
import { DishComplete } from "../../pages/Menu/Menu"
import Button from "@mui/material/Button"
import {} from "@mui/material"
import {} from "react-router-dom"
import AddToFavoritesButton from "../AddToFavoritesButton/AddToFavoritesButton"
import { Box } from "../Box/Box"

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
        <Box className={styles.menuItem} key={dish.id}>
            <Box className={styles.flexGrow}>
                <img alt={dish.name} src={dish.imgUrl} className={styles.img} />
                <Box className={styles.itemText}>
                    {starRating(dish.rating)}
                    <p className={styles.name}>{dish.name}</p>
                    <span className={styles.description}>{dish.description}</span>
                </Box>
                <Box className={styles.flex}>
                    <AddToFavoritesButton
                        className={styles.addToFavoriteButton}
                        clicked={favouriteIds?.includes?.(dish.id)}
                        onClick={e => {
                            toggleFavouriteDish(dish.id, e)
                        }}
                    />
                </Box>
            </Box>
            <Box className={styles.flexBtn}>
                <Button variant="contained" onClick={() => handleAdd(dish)} className={styles.primary} color="gold">
                    Add to order
                </Button>
                <Button variant="outlined" onClick={() => handleRemove(dish)} disabled={!disableRemove(dish.id)} color="black">
                    Remove from order
                </Button>
            </Box>
        </Box>
    )
}

export default DishCard
