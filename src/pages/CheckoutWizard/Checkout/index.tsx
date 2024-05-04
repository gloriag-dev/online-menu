import { Controller, FormProvider, useForm } from "react-hook-form"
import styles from "./Checkout.module.scss"
import useAddressStore from "../../../stores/addressStore"
import { Button, FormLabel, TextField } from "@mui/material"
import TextInputRHF from "../../../components/input/TextInput/TextInput.rhf"

interface CheckoutData {
    cardNumber: string
    cvv: string
    expiry: string
}
type CheckoutProps = {
    onPrevious: () => void
    onNext: () => void
}
export const Checkout = ({ onPrevious }: CheckoutProps) => {
    const form = useForm<CheckoutData>()
    const addressStore = useAddressStore()

    const onSubmit = (values: CheckoutData) => {
        console.log(values)
    }

    const handleClick = () => {
        onPrevious()
    }

    return (
        <div className={styles.main}>
            <div className={styles.addressData}>
                <section className={styles.addressCard}>
                    <p>
                        {addressStore.via}-{addressStore.number}
                    </p>
                    <p>
                        {addressStore.city}-{addressStore.cap}
                    </p>
                </section>
            </div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                <Controller
                        name="card number"
                        render={({ field }) => (
                            <div className={styles.field}>
                                <TextInputRHF
                        name="card number"
                        label="Card Number"
                        rules={{
                            required: "This field is required",
                            pattern: {
                                value: /^\d{16}$/
                            }
                        }}
                        format={value => value.replaceAll(/\D/g, "").slice(0, 16)}
                    />
                            </div>
                        )}
                    />
                    <Controller
                        name="cvv"
                        render={({ field }) => (
                            <div className={styles.field}>
                                <TextInputRHF
                        name="cvv"
                        label="CVV"
                        rules={{
                            required: "This field is required",
                            message: "MESSAGE"
                        }}
                        format={value => value.replaceAll(/\D/g, "").slice(0, 3)}
                    />
                            </div>
                        )}
                    />
                    <Controller
                        name="expiry"
                        render={({ field }) => (
                            <div className={styles.field}>
                                <FormLabel>Expiry</FormLabel>
                                <TextField
                                    className={styles.textfield}
                                    variant="outlined"
                                    disabled={field.disabled}
                                    name={field.name}
                                    onBlur={field.onBlur}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </div>
                        )}
                    />
                    <Button onClick={handleClick}>Indietro</Button>
                    <Button variant="contained" type="submit" color="gold" disabled={!form.formState.isValid}>
                        Submit
                    </Button>
                 
                </form>
            </FormProvider>
        </div>
    )
}
