import { PropsWithChildren } from "react"
import style from "./Wrapper.module.scss"
import { OrderBar } from "../OrderBar/OrderBar"
import useOrderStore from "../../stores/orderStore"
import { Box } from "../Box/Box"

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
    const orderStore = useOrderStore()
    return (
        <Box className={style.root}>
            <Box className={style.cover}></Box>
            <Box className={style.main}>
                <Box className={style.center}>
                    <Box className={style.left}>{children}</Box>
                    <OrderBar open={orderStore.total > 0} />
                </Box>
            </Box>
        </Box>
    )
}
