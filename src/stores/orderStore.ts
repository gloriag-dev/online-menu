import { create } from "zustand"
import { Dish } from "./dishStore"

interface OrderType {
    order: Dish[]
    total: number
    quantity: number
    addToOrder: (id: number, price: number, name: string) => void
    removeFromOrder: (id: number) => void
}

const useOrderStore = create<OrderType>()(set => ({
    order: [],
    total: 0,
    quantity: 0,
    addToOrder: (id: number, price: number, name: string) => {
        set(state => {
            const existingDishIndex = state.order.findIndex(dish => dish.id === id)

            if (existingDishIndex !== -1) {
                const updatedOrder = [...state.order]
                updatedOrder[existingDishIndex].quantity += 1
                return {
                    total: state.total + price,
                    order: updatedOrder
                }
            } else {
                const newDish: Dish = { id, price, name, quantity: 1 }
                return {
                    total: state.total + price,
                    order: [...state.order, newDish]
                }
            }
        })
    },
    removeFromOrder: (id: number) => {
        set(state => {
            const updatedOrder = state.order.filter(dish => dish.id !== id)
            const deletedDish = state.order.find(dish => dish.id === id)

            if (deletedDish) {
                return {
                    total: state.total - deletedDish.price * deletedDish.quantity,
                    order: updatedOrder
                }
            }

            return { ...state }
        })
    }
}))

export default useOrderStore
