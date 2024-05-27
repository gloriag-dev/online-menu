import { FormProvider, useForm } from "react-hook-form"
import style from "./address.module.scss"
import { Button } from "@mui/material"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import useUserStore from "../../../stores/userStore"
import TextInputRHF from "../../../components/input/TextInput/TextInput.rhf"
import SelectInputRHF from "../../../components/input/SelectInput/SelectInput.rhf"
export type AddressData = {
    district: string
    city: string
    zip: string
    street: string
    number: string
    name: string
    surname: string
}

export type AddressProps = {
    onNext: () => void
}

export interface IDistrict {
    district: string
    code: string
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        gold: true
        black: true
    }
}
export const Address = ({ onNext }: AddressProps) => {
    const userStore = useUserStore()
    const form = useForm<AddressData>({
        mode: "all",
        reValidateMode: "onBlur"
    })

    const getProvince = async (): Promise<IDistrict[]> => {
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
        const { street, zip, city, district, number, name, surname } = values
        userStore.setUserData(district, zip, city, street, number, name, surname)
        await mutation.mutateAsync(values)
        onNext()
        form.reset()
    }

    return (
        <div className={style.main}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={style.form}>
                    <div className={style.flexRow}>
                        <TextInputRHF
                            name="name"
                            label="Name "
                            defaultValue={userStore.name}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                        <TextInputRHF
                            name="surname"
                            label="Surname"
                            defaultValue={userStore.surname}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                    </div>
                    <div className={style.flexRow}>
                        <SelectInputRHF
                            name="district"
                            label="District"
                            defaultValue={userStore.district}
                            rules={{
                                required: "This field is required"
                            }}
                            values={query.data?.map?.(district => {
                                return {
                                    value: district.code,
                                    label: district.district
                                }
                            })}
                        />
                        <TextInputRHF
                            name="city"
                            defaultValue={userStore.city}
                            label="City"
                            rules={{
                                required: "This field is required",
                                message: "MESSAGE"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?1234567890]/g, "")}
                        />
                        <div className={style.zip}>
                            <TextInputRHF
                                name="zip"
                                label="Zip code"
                                defaultValue={userStore.zip}
                                rules={{
                                    required: "This field is required",
                                    pattern: {
                                        value: /^\d{5}$/
                                    }
                                }}
                                format={value => value.replaceAll(/\D/g, "").slice(0, 5)}
                            />
                        </div>
                    </div>
                    <div className={style.flexRow}>
                        <TextInputRHF
                            name="street"
                            label="Address"
                            defaultValue={userStore.street}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                        <TextInputRHF
                            name="number"
                            label="Number"
                            defaultValue={userStore.number}
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
