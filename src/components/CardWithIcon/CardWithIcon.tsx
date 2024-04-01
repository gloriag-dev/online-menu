import { ReactNode } from "react"

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
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export default CardWithIcon
