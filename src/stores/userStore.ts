import { create } from "zustand"

interface UserStoreType {
    provincia?: string
    cap?: string
    city?: string
    via?: string
    number?: string
    name?: string
    surname?: string
    setUserData: (provincia: string, cap: string, city: string, via: string, number: string, name: string, surname: string) => void
}

const useUserStore = create<UserStoreType>()(set => ({
    setUserData: (provincia: string, cap: string, city: string, via: string, number: string, name: string, surname: string) => {
        set({
            provincia,
            cap,
            city,
            via,
            number,
            name,
            surname
        })
    }
}))

export default useUserStore
