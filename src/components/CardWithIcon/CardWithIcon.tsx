import { ReactNode } from "react"
import styles from "./CardWithIcon.module.scss"
import { Box } from "../Box/Box"

type CardWithIconProps = {
    className: string
    iconContainerClassname: string
    icon: ReactNode
    title: string
    description: string
}

export const CardWithIcon = ({ className, icon, title, description, iconContainerClassname }: CardWithIconProps) => {
    return (
        <Box className={className}>
            <Box className={iconContainerClassname}>{icon}</Box>
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
        </Box>
    )
}
export default CardWithIcon
