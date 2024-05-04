import { PropsWithChildren } from "react"
import style from "./Wrapper.module.scss"
import { OrderBar } from "../OrderBar/OrderBar"

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className={style.root}>
            <div className={style.cover}></div>
            <div className={style.main}>{children}</div>
            <OrderBar open/>
        </div>
    )
}
