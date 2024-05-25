import { create } from "zustand"

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

const useUserStore = create<UserStoreType>()(set => ({
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
}))

export default useUserStore
