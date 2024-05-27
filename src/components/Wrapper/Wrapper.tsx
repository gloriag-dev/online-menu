import { PropsWithChildren } from "react"
import style from "./Wrapper.module.scss"
import { OrderBar } from "../OrderBar/OrderBar"
import useOrderStore from "../../stores/orderStore"

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
    const orderStore = useOrderStore()
    return (
        <div className={style.root}>
            <div className={style.cover}></div>
            <div className={style.main}>
                <div className={style.center}>
                    <div className={style.left}>{children}</div>
                    <OrderBar open={orderStore.total > 0} />
                </div>
            </div>
        </div>
    )
}
