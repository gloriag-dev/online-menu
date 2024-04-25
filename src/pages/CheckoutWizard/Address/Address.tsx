import { FormProvider, useForm } from "react-hook-form"
import style from "./address.module.scss"
import { Button } from "@mui/material"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useAddressStore from "../../../stores/addressStore"
import {} from "zod"
import TextInputRHF from "../../../components/input/TextInput/TextInput.rhf"
import SelectInputRHF from "../../../components/input/SelectInput/SelectInput.rhf"
export type AddressData = {
    provincia: string
    city: string
    cap: string
    via: string
    number: string
}

export type AddressProps = {
    onNext: () => void
}

export interface IProvince {
    province: string
    code: string
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        gold: true
        black: true
    }
}
export const Address = ({ onNext }: AddressProps) => {
    const addressStore = useAddressStore()
    const form = useForm<AddressData>({
        mode: "onBlur",
        reValidateMode: "onBlur"
    })

    const getProvince = async (): Promise<IProvince[]> => {
        const response = await axios.get("/province")
        return response.data
    }
    const query = useQuery({ queryKey: ["province"], queryFn: getProvince })

    const mutation = useMutation({
        mutationFn: (values: AddressData) => {
            return axios.post("/address", values)
        }
    })

    const onSubmit = async (values: AddressData) => {
        const { via, cap, city, provincia, number } = values
        addressStore.setAddress(provincia, cap, city, via, number)
        await mutation.mutateAsync(values)
        onNext()
        form.reset()
    }

    return (
        <div className={style.main}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={style.form}>
                    <SelectInputRHF
                        name="provincia"
                        label="Provincia"
                        values={query.data?.map?.(provincia => {
                            return {
                                value: provincia.code,
                                label: provincia.province
                            }
                        })}
                    />
                    <TextInputRHF name="city" label="City" />
                    <TextInputRHF name="cap" label="CAP" />
                    <TextInputRHF name="via" label="Adress" />
                    <TextInputRHF name="number" label="Number" />
                    <Button variant="contained" type="submit" color="gold">
                        Go to checkout
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
