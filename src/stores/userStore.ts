import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface UserStoreType {
    district?: string
    zip?: string
    city?: string
    street?: string
    number?: string
    name?: string
    surname?: string
    setUserData: (district: string, zip: string, city: string, street: string, number: string, name: string, surname: string) => void
}

const useUserStore = create<UserStoreType>()(
    persist(
        set => ({
            setUserData: (district: string, zip: string, city: string, street: string, number: string, name: string, surname: string) => {
                set({
                    district,
                    zip,
                    city,
                    street,
                    number,
                    name,
                    surname
                })
            }
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useUserStore
