import clsx from "clsx"
import useOrderStore from "../../stores/orderStore"
import styles from "./OrderBar.module.scss"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { Box } from "../Box/Box"

interface OrderBarProps {
    open: boolean
}

export const OrderBar: React.FC<OrderBarProps> = ({ open }) => {
    const orderStore = useOrderStore()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/order")
    }
    const location = useLocation()
    return (
        <Box as="section" className={clsx(styles.bar, { [styles.open]: open })}>
            <Box className={styles.format}>
                TOTAL: <p>{orderStore.total.toFixed(2) + "$"}</p>
            </Box>
            {!location.pathname.includes("/checkout") && (
                <Button onClick={handleClick} className={styles.goToOrderBtn}>
                    COMPLETE ORDER
                </Button>
            )}
        </Box>
    )
}
