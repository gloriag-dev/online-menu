import { PropsWithChildren } from "react"
import style from "./Wrapper.module.scss"

interface WrapperProps extends PropsWithChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
    return <div className={style.main}>{children}</div>
}
