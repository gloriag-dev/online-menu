import { Controller, FormProvider, useForm } from "react-hook-form"
import styles from "./Checkout.module.scss"
import useAddressStore from "../../../stores/addressStore"
import { Button, FormLabel} from "@mui/material"
import TextInputRHF from "../../../components/input/TextInput/TextInput.rhf"
import DateInput from "../../../components/input/DateInput/DateInput"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
    const onSubmit = (values: CheckoutData) => {
        console.log(values)
    }

    const handleClick = () => {
        onPrevious()
    }
    const handleComplete = () => {
navigate("./thank-you")
    }

    return (
        <div className={styles.main}>
            <div className={styles.addressData}>
                <section className={styles.addressCard}>
                    <span className={styles.billingData}>
                       Address:  {addressStore.number}, {addressStore.via}
                    </span>
                    <p className={styles.billingData}>
                        City: {addressStore.cap}, {addressStore.city}
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
                            pattern: {
                                value: /^\d{3}$/
                            }
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
                               <DateInput/>
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
