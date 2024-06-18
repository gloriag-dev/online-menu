import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface DishStoreType {
    dishes: Dish[]
    favouriteIds: number[]
    toggleFavouriteDish: (dishId: number, favorite: boolean) => void
}
export interface Dish {
    id: number
    price: number
    name: string
    quantity: number
}

const useDishStore = create<DishStoreType>()(
    persist(
        set => ({
            favouriteIds: [],
            dishes: [],
            toggleFavouriteDish: (dishId: number, favorite: boolean) => {
                set(state => {
                    if (favorite) {
                        return { favouriteIds: [...state.favouriteIds, dishId] }
                    } else {
                        return {
                            favouriteIds: state.favouriteIds.filter(singleDishId => singleDishId != dishId)
                        }
                    }
                })
            }
        }),
        {
            name: "dish-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useDishStore
