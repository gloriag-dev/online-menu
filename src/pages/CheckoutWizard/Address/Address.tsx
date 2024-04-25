import { FormProvider, useForm } from "react-hook-form"
import style from "./address.module.scss"
import { Button } from "@mui/material"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useAddressStore from "../../../stores/addressStore"
import { ZodError, z } from "zod"
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

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        gold: true
        black: true
    }
}
export const Address = ({ onNext }: AddressProps) => {
    const addressStore = useAddressStore()
    const form = useForm<AddressData>()

    const getProvince = async (): Promise<string[]> => {
        const response = await axios.get("/province")
        return response.data
    }
    const query = useQuery({ queryKey: ["province"], queryFn: getProvince })

    const mutation = useMutation({
        mutationFn: (values: AddressData) => {
            return axios.post("/address", values)
        }
    })
    const AddressData = z
        .object({
            provincia: z.string().trim(),
            city: z.string(),
            cap: z.string().trim(),
            via: z.string(),
            number: z.string()
        })
        .strict()
    const onSubmit = async (values: AddressData) => {
        try {
            const data = AddressData.parse(values)
        } catch (e) {
            if (e instanceof ZodError) {
            } else {
                throw e
            }
        }
        const { via, cap, city, provincia, number } = values
        addressStore.setAddress(values)
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
                                value: provincia,
                                label: provincia
                            }
                        })}
                    />
                    <TextInputRHF name="city" label="Città" />
                    <TextInputRHF name="cap" label="CAP" />
                    <TextInputRHF name="via" label="Via" />
                    <TextInputRHF name="number" label="Numero" />
                    <Button variant="contained" type="submit" color="gold">
                        Go to checkout
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
