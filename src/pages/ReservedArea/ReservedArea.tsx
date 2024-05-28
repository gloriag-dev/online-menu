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
import { useMutation, useQuery } from "@tanstack/react-query"
import { handleRequest } from "msw"
import { DialogContent } from "@mui/material"
export const ReservedArea = () => {
    const { name, surname, number, city, zip, street } = useUserStore()
    const userArray = [name, surname, number, city, zip, street]
    const [shouldFillUserData, setShouldFillUserData] = useState(false)
    const [open, setOpen] = useState(false)

    console.log("Open", open)
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
    const handleSave = () => {
        setOpen(false)
        console.log("HandleSaveCalled")
    }
    const handleBackdropClose = (reason: string) => {
        // if (reason && reason !== "backdropClick") setOpen(false)
    }
    console.log(name, surname, number, city, zip, street, "data")
    return (
        <>
            <div className={styles.cover}></div>
            <div className={styles.flex}>
                {shouldFillUserData ? (
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

            <InfoDialog open={open} onChange={handleSave} />
        </>
    )
}
export default ReservedArea

export interface InfoDialogProps {
    open: boolean
    onChange: () => void
    // handleBackdropClose: (reason: string) => void
}

function InfoDialog(props: InfoDialogProps) {
    const userStore = useUserStore()
    const form = useForm<AddressData>({
        mode: "all",
        reValidateMode: "onBlur"
    })

    const getDistricts = async (): Promise<IDistrict[]> => {
        const response = await axios.get("/districts")
        return response.data
    }
    const query = useQuery({ queryKey: ["districts"], queryFn: getDistricts })
    const onSubmit = async (values: AddressData) => {
        const { street, zip, city, district, number, name, surname } = values
        userStore.setUserData(district, zip, city, street, number, name, surname)
        await mutation.mutateAsync(values)
        form.reset()
        props.onChange()
    }
    const mutation = useMutation({
        mutationFn: (values: AddressData) => {
            return axios.post("/address", values)
        }
    })
    return (
        <Dialog open={props.open} className={styles.main} onClose={props.onChange}>
            <DialogTitle className={styles.title}>Edit your information</DialogTitle>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.flexRow}>
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
                    <div className={styles.flexRow}>
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
                        <div className={styles.zip}>
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

                    <div className={styles.flexRow}>
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
                        Save
                    </Button>
                </form>
            </FormProvider>
        </Dialog>
    )
}
