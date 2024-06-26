import useUserStore from "../../stores/userStore"
import styles from "./styles.module.scss"
import { Pencil } from "../../components/Icons/Pencil"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { AddressData, IDistrict } from "../CheckoutWizard/Address/Address"
import { FormProvider, useForm } from "react-hook-form"
import TextInputRHF from "../../components/Input/TextInput/TextInput.rhf"
import SelectInputRHF from "../../components/Input/SelectInput/SelectInput.rhf"
import axios from "axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import { DishComplete } from "../Menu/Menu"
import useDishStore from "../../stores/dishStore"
import clsx from "clsx"
import RoundButton from "../../components/RoundButton/RoundButton"
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton"
import { capitalize } from "lodash"
import AddToCart from "../../components/Icons/AddToCart"
import { Box } from "../../components/Box/Box"
import Wishlist from "../../components/Icons/WishList"
import useOrderStore from "../../stores/orderStore"
import { OrderBar } from "../../components/OrderBar/OrderBar"

export const ReservedArea = () => {
    const { name, surname, number, city, zip, street } = useUserStore()
    const { favouriteIds, toggleFavouriteDish } = useDishStore()
    const { addToOrder, order } = useOrderStore()
    const userArray = [name, surname, number, city, zip, street]
    const [shouldFillUserData, setShouldFillUserData] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        checkForEmptyFields()
    }, [userArray])

    const fetchDishes = async (): Promise<DishComplete[]> => {
        const res = await axios.get("/dishes")
        return res.data.dishes
    }

    const dishesQuery = useQuery({
        queryKey: ["/dishes"],
        queryFn: fetchDishes
    })

    const findDishById = (id: number) => {
        return dishesQuery.data?.find(singleDish => singleDish.id === id)
    }

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
    }
    const handleAddToCart = (dish: DishComplete) => {
        addToOrder(dish?.id, dish?.price, dish?.name)
    }

    return (
        <>
            <Box className={styles.cover}></Box>
            <Box as="section" className={styles.wrapper}>
                <Box className={styles.flex}>
                    {shouldFillUserData ? (
                        <Box className={styles.missingInfo}>
                            <h2>Whoops, it looks like you haven't filled in your information yet!</h2>
                            <Button variant="contained" color="gold" onClick={handleOpenModal}>
                                Fill in your information
                            </Button>
                        </Box>
                    ) : (
                        <Box className={styles.container}>
                            <h2>
                                <button title="Edit" className={styles.btn} onClick={handleOpenModal}>
                                    <Pencil />
                                </button>
                                Info you shared with us:
                            </h2>
                            <h4>
                                Full Name: {name} {surname}
                            </h4>
                            <h4 className={styles.address}>
                                Address: {number}, {street}
                            </h4>
                            <h4>
                                City: {city} {zip}
                            </h4>
                        </Box>
                    )}
                </Box>
                <Box className={styles.favouritesArea}>
                    {favouriteIds.length > 0 && (
                        <Box className={styles.header}>
                            <Wishlist width={24} />
                            <h2>Favourites</h2>
                        </Box>
                    )}

                    {favouriteIds.map(id => {
                        const singleDish = findDishById(id)

                        return (
                            <Box as="section" className={styles.cardContainer} key={id}>
                                <Box className={clsx("order-card", styles.card)}>
                                    <Box className={styles.inner}>
                                        <Box>
                                            <img alt="dish" src={singleDish?.imgUrl} className={styles.img} />
                                        </Box>

                                        <Box className={styles.info}>
                                            <span className={styles.infoText}>{singleDish?.name}</span>
                                            <span className={styles.infoText}>{singleDish?.price}$</span>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.btnContainer}>
                                    <AddToFavoritesButton
                                        clicked={favouriteIds?.includes?.(singleDish?.id as number)}
                                        onClick={e => {
                                            toggleFavouriteDish(singleDish?.id as number, e)
                                        }}
                                    />
                                    <RoundButton onClick={() => handleAddToCart(singleDish as DishComplete)} className={styles.removeItemBtn} children={<AddToCart />}></RoundButton>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <OrderBar open={order.length > 0} />
            </Box>
            <InfoDialog open={open} onChange={handleSave} />
        </>
    )
}
export default ReservedArea

export interface InfoDialogProps {
    open: boolean
    onChange: () => void
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
                    <Box className={styles.flexRow}>
                        <TextInputRHF
                            name="name"
                            label="Name "
                            defaultValue={userStore.name}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => capitalize(value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, ""))}
                        />
                        <TextInputRHF
                            name="surname"
                            label="Surname"
                            defaultValue={userStore.surname}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => capitalize(value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, ""))}
                        />
                    </Box>

                    <Box className={styles.flexRow}>
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
                                    label: district.code
                                }
                            })}
                        />
                        <TextInputRHF
                            name="city"
                            defaultValue={userStore.city}
                            label="City"
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => capitalize(value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?1234567890]/g, ""))}
                        />
                        <Box className={styles.zip}>
                            <TextInputRHF
                                name="zip"
                                label="Zip code"
                                defaultValue={userStore.zip}
                                rules={{
                                    required: "This field is required",
                                    pattern: {
                                        value: /^\d{5}$/,
                                        message: "Must be at least 5 digits"
                                    }
                                }}
                                format={value => value.replaceAll(/\D/g, "").slice(0, 5)}
                            />
                        </Box>
                    </Box>

                    <Box className={styles.flexRow}>
                        <TextInputRHF
                            name="street"
                            label="Address"
                            defaultValue={userStore.street}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => capitalize(value.replaceAll(/[!@#$%^&*()_+\-=[\]{};:"\\|,.<>/?]/g, ""))}
                        />
                        <TextInputRHF
                            name="number"
                            label="Number"
                            defaultValue={userStore.number}
                            rules={{
                                required: "This field is required"
                            }}
                            format={value => capitalize(value.replaceAll(/\D/g, "").slice(0, 4))}
                        />
                    </Box>
                    <Button variant="contained" type="submit" color="gold" disabled={!form.formState.isValid}>
                        Save
                    </Button>
                </form>
            </FormProvider>
        </Dialog>
    )
}
