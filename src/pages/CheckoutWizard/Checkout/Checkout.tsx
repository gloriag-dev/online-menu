import { Controller, FormProvider, useForm } from "react-hook-form"
import styles from "./Checkout.module.scss"
import useUserStore from "../../../stores/userStore"
import { Button, FormLabel } from "@mui/material"
import TextInputRHF from "../../../components/Input/TextInput/TextInput.rhf"
import DateInput from "../../../components/Input/DateInput/DateInput"
import {} from "react-router-dom"
import {} from "lodash"

interface CheckoutData {
    cardNumber: string
    cvv: string
    expiry: string
}
type CheckoutProps = {
    onPrevious: () => void
    onNext: () => void
}
export const Checkout = ({ onPrevious, onNext }: CheckoutProps) => {
    const form = useForm<CheckoutData>({
        mode: "all",
        reValidateMode: "onBlur"
    })
    const userStore = useUserStore()
    const onSubmit = (values: CheckoutData) => {
        console.log(values)
    }

    const handleClick = () => {
        onPrevious()
    }
    const handleComplete = () => {
        onNext()
    }
    const fullName = `${userStore.name}` + " " + `${userStore.surname}`
    return (
        <div className={styles.main}>
            <div className={styles.addressData}>
                <h2>{fullName}</h2>
                <section className={styles.addressCard}>
                    <span className={styles.billingData}>
                        Address: {userStore.number}, {userStore.street}
                    </span>
                    <p className={styles.billingData}>
                        City: {userStore.zip}, {userStore.city}
                    </p>
                    <Button variant="contained" type="submit" color="gold" onClick={handleClick} className={styles.backBtn}>
                        Edit billing address
                    </Button>
                </section>
            </div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <Controller
                        name="card number"
                        render={() => (
                            <div className={styles.field}>
                                <TextInputRHF
                                    name="card number"
                                    label="Card Number"
                                    rules={{
                                        required: "This field is required",
                                        pattern: {
                                            value: /^\d{16}$/,
                                            message: "Must be 16 digits"
                                        }
                                    }}
                                    format={value => value.replaceAll(/\D/g, "").slice(0, 16)}
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="cvv"
                        render={() => (
                            <div className={styles.field}>
                                <TextInputRHF
                                    name="cvv"
                                    label="CVV"
                                    rules={{
                                        required: "This field is required",
                                        pattern: {
                                            value: /^\d{3}$/,
                                            message: "Must be 3 digits"
                                        }
                                    }}
                                    format={value => value.replaceAll(/\D/g, "").slice(0, 3)}
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name="expiry"
                        render={() => (
                            <div className={styles.field}>
                                <FormLabel className={styles.label}>Expiry</FormLabel>
                                <DateInput />
                            </div>
                        )}
                    />
                    <Button variant="contained" type="submit" color="gold" disabled={!form.formState.isValid} onClick={handleComplete}>
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
