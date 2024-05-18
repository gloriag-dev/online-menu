import useUserStore from "../../stores/userStore"
import styles from "./styles.module.scss"
import {Pencil} from '../../components/Icons/Pencil'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
export const ReservedArea = () => {
    const {name, surname, number, city, cap, via} = useUserStore()
    const userArray = [name, surname, number, city, cap, via];
    const [shouldFillUserData, setShouldFillUserData] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        checkForEmptyFields()
    }, [userArray])
    const checkForEmptyFields = ( ) => {
        
        const hasEmptyField = userArray.some(field => field === undefined || '');
        if (hasEmptyField) {
            setShouldFillUserData(true)
        } else {
            setShouldFillUserData(false)
        }
     }
    const handleNavigateToAddress = () => {
        navigate('/checkout-wizard/address')
    }
    return <>
     <div className={styles.cover}></div>
     <div className={styles.flex}>
        {shouldFillUserData ?  <div className={styles.missingInfo}>
        <h2>Whoops, it looks like you haven't filled in your information yet!</h2>
        <Button variant="contained" color="gold" onClick={handleNavigateToAddress}>Fill in your information</Button></div>  : 
         <div className={styles.container}>
            <h2> <button className={styles.btn} onClick={handleNavigateToAddress}><Pencil /></button>Info you shared with us:</h2>
            <h4>Full Name: {name} {surname}</h4>
            <h4>Address:  {number}, {via} </h4>
            <h4>City: {city} {cap}</h4>
            </div>}
            </div>
    </>
}
export default ReservedArea