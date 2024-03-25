import create from "zustand";

interface DishStoreType {
  dishes: Dish[];
  favouriteIds: number[];
  toggleFavouriteDish: (dishId: number, favorite: boolean) => void;
}
export interface Dish {
  id: number;
  price: number;
}

const useDishStore = create<DishStoreType>()((set) => ({
  favouriteIds: [],
  dishes: [],
  toggleFavouriteDish: (dishId: number, favorite: boolean) => {
    set((state) => {
      if (favorite) {
        return { favouriteIds: [...state.favouriteIds, dishId] };
      } else {
        return {
          favouriteIds: state.favouriteIds.filter(
            (singleDishId) => singleDishId != dishId
          ),
        };
      }
    });
  },
}));

export default useDishStore;
