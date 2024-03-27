import { create } from "zustand"

interface AddressStoreType {
    provincia?: string
    cap?: string
    city?: string
    via?: string
    number?: string
    setAddress: (provincia: string, cap: string, city: string, via: string, number: string) => void
}

const useAddressStore = create<AddressStoreType>()(set => ({
    setAddress: (provincia: string, cap: string, city: string, via: string, number: string) => {
        set({
            provincia,
            cap,
            city,
            via,
            number
        })
    }
}))

export default useAddressStore
