import useUserStore from "../../stores/userStore"
import styles from "./styles.module.scss"
import {Pencil} from '../../components/Icons/Pencil'
import { useNavigate } from "react-router-dom";
export const ReservedArea = () => {
    const {name, surname, number, city, cap, via} = useUserStore()
    const navigate = useNavigate()
 
    const handleNavigateToAddress = () => {
        navigate('/checkout-wizard/address')
    }
    return <>
         <div className={styles.cover}></div>
         <div className={styles.flex}>
         <div className={styles.container}>
            <h2> <button className={styles.btn} onClick={handleNavigateToAddress}><Pencil /></button>Info you shared with us:</h2>
            <h4>Full Name: {name} {surname}</h4>
            <h4>Address:  {number}, {via} </h4>
            <h4>City: {city} {cap}</h4>
            </div>
            </div>
    </>
}
export default ReservedArea