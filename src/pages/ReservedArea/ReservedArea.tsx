import useUserStore from "../../stores/userStore"
import styles from "./styles.module.scss"
import { Pencil } from "../../components/Icons/Pencil"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { AddressData, IDistrict } from "../CheckoutWizard/Address/Address"
import { FormProvider, useForm } from "react-hook-form"
import TextInputRHF from "../../components/input/TextInput/TextInput.rhf"
import SelectInputRHF from "../../components/input/SelectInput/SelectInput.rhf"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
export const ReservedArea = () => {
    const { name, surname, number, city, zip, street } = useUserStore()
    const userArray = [name, surname, number, city, zip, street]
    const [shouldFillUserData, setShouldFillUserData] = useState(false)
    const [open, setOpen] = useState(false)
    // const navigate = useNavigate()

    useEffect(() => {
        checkForEmptyFields()
    }, [userArray])
    const checkForEmptyFields = () => {
        const hasEmptyField = userArray.some(field => field === undefined || "")
        if (hasEmptyField) {
            setShouldFillUserData(true)
        } else {
            setShouldFillUserData(false)
        }
    }

    const handleOpenModal = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = () => {
        console.log("changed")
    }
    return (
        <>
            <div className={styles.cover}></div>
            <div className={styles.flex}>
                {!shouldFillUserData ? (
                    <div className={styles.missingInfo}>
                        <h2>Whoops, it looks like you haven't filled in your information yet!</h2>
                        <Button variant="contained" color="gold" onClick={handleOpenModal}>
                            Fill in your information
                        </Button>
                    </div>
                ) : (
                    <div className={styles.container}>
                        <h2>
                            <button className={styles.btn} onClick={handleOpenModal}>
                                <Pencil />
                            </button>
                            Info you shared with us:
                        </h2>
                        <h4>
                            Full Name: {name} {surname}
                        </h4>
                        <h4>
                            Address: {number}, {street}
                        </h4>
                        <h4>
                            City: {city} {zip}
                        </h4>
                    </div>
                )}
            </div>

            <InfoDialog open={open} onClose={handleClose} onChange={handleChange} />
        </>
    )
}
export default ReservedArea

export interface InfoDialogProps {
    open: boolean
    onClose?: () => void
    onChange?: () => void
}

function InfoDialog(props: InfoDialogProps) {
    const form = useForm<AddressData>({
        mode: "all",
        reValidateMode: "onBlur"
    })
    const getProvince = async (): Promise<IDistrict[]> => {
        const response = await axios.get("/province")
        return response.data
    }
    const query = useQuery({ queryKey: ["province"], queryFn: getProvince })
    const onSubmit = async (values: AddressData) => {
        console.log(values)
    }
    return (
        <Dialog open={props.open} onClose={props.onClose} onChange={props.onChange} className={styles.main}>
            <DialogTitle>Edit your information</DialogTitle>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.flexRow}>
                        <TextInputRHF
                            name="name"
                            label="Name "
                            // defaultValue={userStore.name}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                        <TextInputRHF
                            name="surname"
                            label="Surname"
                            // defaultValue={userStore.surname}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                    </div>
                    <div className={styles.flexRow}>
                        <SelectInputRHF
                            name="district"
                            label="District"
                            // defaultValue={userStore.district}
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
                            // defaultValue={userStore.city}
                            label="City"
                            rules={{
                                required: "This field is required",
                                message: "MESSAGE"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?1234567890]/g, "")}
                        />
                        <div className={styles.zip}>
                            <TextInputRHF
                                name="zip"
                                label="Zip code"
                                // defaultValue={userStore.zip}
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

                    <div className={styles.flexRow}>
                        <TextInputRHF
                            name="via"
                            label="Address"
                            // defaultValue={userStore.street}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, "")}
                        />
                        <TextInputRHF
                            name="number"
                            label="Number"
                            // defaultValue={userStore.number}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => value.replaceAll(/\D/g, "").slice(0, 4)}
                        />
                    </div>
                    <Button variant="contained" type="submit" color="gold" disabled={!form.formState.isValid}>
                        Go back to Reserved Area
                    </Button>
                </form>
            </FormProvider>
        </Dialog>
    )
}
