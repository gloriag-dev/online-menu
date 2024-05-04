import { FormProvider, useForm } from "react-hook-form"
import style from "./address.module.scss"
import { Button } from "@mui/material"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useAddressStore from "../../../stores/addressStore"
import {} from "zod"
import TextInputRHF from "../../../components/input/TextInput/TextInput.rhf"
import SelectInputRHF from "../../../components/input/SelectInput/SelectInput.rhf"
import {} from "react"
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
        mode: "all",
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
    console.log(form.watch)
    return (
        <div className={style.main}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={style.form}>
                    <SelectInputRHF
                        name="provincia"
                        label="Provincia"
                        rules={{
                            required: "This field is required"
                        }}
                        values={query.data?.map?.(provincia => {
                            return {
                                value: provincia.code,
                                label: provincia.province
                            }
                        })}
                    />
                    <TextInputRHF
                        name="city"
                        label="City"
                        rules={{
                            required: "This field is required",
                            message: "MESSAGE"
                        }}
                        format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?1234567890]/g, "")}
                    />
                    <TextInputRHF
                        name="cap"
                        label="CAP"
                        rules={{
                            required: "This field is required"
                        }}
                        format={value => value.replaceAll(/\D/g, "").slice(0, 5)}
                    />
<div className={style.flex}>
                    <TextInputRHF
                        name="via"
                        label="Address"
                        rules={{
                            required: "This field is required"
                        }}
                        format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                    />
                    <TextInputRHF
                        name="number"
                        label="Number"
                        rules={{
                            required: "This field is required"
                        }}
                        format={value => value.replaceAll(/\D/g, "").slice(0, 4)}
                    />
                    </div>
                    <Button variant="contained" type="submit" color="gold" disabled={!form.formState.isValid}>
                        Go to checkout
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
