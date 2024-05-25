import { PropsWithChildren } from "react"
import style from "./Wrapper.module.scss"
import { OrderBar } from "../OrderBar/OrderBar"
import { OrderSummary } from "../OrderSummary/OrderSummary"

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className={style.root}>
            <div className={style.cover}></div>
            <div className={style.main}>
                <div className={style.center}>
                    <div className={style.left}>{children}</div>
                    <div className={style.right}>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}
