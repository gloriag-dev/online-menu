import { Controller, FormProvider, useForm } from "react-hook-form"
import style from "./address.module.scss"
import { Button, FormLabel, MenuItem, Select, TextField } from "@mui/material"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useAddressStore from "../../../stores/addressStore"
import { ZodError, z } from "zod"
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
                    <Controller
                        name="provincia"
                        render={({ field }) => {
                            return (
                                <div className={style.field}>
                                    <FormLabel>Provincia</FormLabel>
                                    <Select className={style.select} disabled={field.disabled} name={field.name} onBlur={field.onBlur} value={field.value} onChange={field.onChange}>
                                        {query.data?.map?.((provincia: string) => (
                                            <MenuItem key={provincia} value={provincia}>
                                                {provincia}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            )
                        }}
                    />
                    <Controller
                        name="city"
                        render={({ field }) => {
                            return (
                                <div className={style.field}>
                                    <FormLabel>Città</FormLabel>
                                    <TextField
                                        variant="outlined"
                                        disabled={field.disabled}
                                        name={field.name}
                                        className={style.textfield}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            )
                        }}
                    />
                    <Controller
                        name="cap"
                        render={({ field }) => {
                            return (
                                <div className={style.field}>
                                    <FormLabel>CAP</FormLabel>
                                    <TextField
                                        variant="outlined"
                                        disabled={field.disabled}
                                        name={field.name}
                                        className={style.textfield}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            )
                        }}
                    />
                    <Controller
                        name="via"
                        render={({ field }) => {
                            return (
                                <div className={style.field}>
                                    <FormLabel>Via</FormLabel>
                                    <TextField
                                        variant="outlined"
                                        className={style.textfield}
                                        disabled={field.disabled}
                                        name={field.name}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            )
                        }}
                    />
                    <Controller
                        name="number"
                        render={({ field }) => {
                            return (
                                <div className={style.field}>
                                    <FormLabel>Numero</FormLabel>
                                    <TextField
                                        className={style.textfield}
                                        variant="outlined"
                                        disabled={field.disabled}
                                        name={field.name}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            )
                        }}
                    />
                    <Button variant="contained" type="submit" color="gold">
                        Go to checkout
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
