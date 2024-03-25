import { create } from "zustand";
import { Dish } from "./dishStore";

interface OrderType {
  order: Dish[];
  total: number;
  addToOrder: (id: number, price: number) => void;
}

const useOrderStore = create<OrderType>()((set) => ({
  order: [],
  total: 0,
  addToOrder: (id: number, price: number) => {
    set((state) => {
      const newDish: Dish = { id, price };

      return {
        total: state.total + price,
        order: [...state.order, newDish],
      };
    });
  },
}));

export default useOrderStore;
