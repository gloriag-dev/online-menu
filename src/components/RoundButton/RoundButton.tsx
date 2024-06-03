import clsx from "clsx"
import { FC, ReactNode } from "react"
import styles from "./RoundButton.module.scss"

interface RoundButtonProps {
    icon?: ReactNode
    children?: ReactNode
    className: string
    onClick?: () => void
}

const RoundButton: FC<RoundButtonProps> = ({ icon, onClick, children, className }: RoundButtonProps) => {
    return (
        <button onClick={onClick} className={clsx("rounded-full", styles.roundedFull, className, )}>
            {icon}
            {children}
        </button>
    )
}

export default RoundButton
