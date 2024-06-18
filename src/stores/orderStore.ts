import { create } from "zustand"
import { Dish } from "./dishStore"
import { createJSONStorage, persist } from "zustand/middleware"

interface OrderType {
    order: Dish[]
    total: number
    quantity: number
    addToOrder: (id: number, price: number, name: string) => void
    removeFromOrder: (id: number) => void
}

const useOrderStore = create<OrderType>()(
    persist(
        set => ({
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
                    const selectedOrder = state.order.find(order => order.id === id)
                    if (!selectedOrder) return { ...state }
                    // We found the order
                    selectedOrder.quantity -= 1 // ne tolgo uno
                    let updatedOrder = state.order
                    // se ne ho meno di 1 lo tolgo
                    if (selectedOrder.quantity < 1) {
                        updatedOrder = state.order.filter(order => order.id !== id)
                    }

                    return {
                        total: state.total - selectedOrder.price,
                        order: updatedOrder,
                        quantity: state.quantity - 1
                    }
                })
            }
        }),
        {
            name: "order-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useOrderStore
