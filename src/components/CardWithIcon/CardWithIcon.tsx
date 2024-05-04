import { ReactNode } from "react"
import styles from './CardWithIcon.module.scss'

type CardWithIconProps = {
    className: string
    iconContainerClassname: string
    icon: ReactNode
    title: string
    description: string
}

export const CardWithIcon = ({ className, icon, title, description, iconContainerClassname }: CardWithIconProps) => {
    return (
        <div className={className}>
            <div className={iconContainerClassname}>{icon}</div>
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export default CardWithIcon
