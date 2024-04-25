import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import styles from "./AddToFavouriteButton.module.scss"
import clsx from "clsx"
import { MouseEvent } from "react"

export interface AddToFavoritesButtonProps {
    clicked?: boolean
    onClick?: (clicked: boolean, event: MouseEvent<HTMLButtonElement>) => void
    className?: string
}

const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({ clicked, onClick, className }) => {
    const onClickInt = (event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(!clicked, event)
    }

    return (
        <button className={clsx("favourite", styles.root, className)} onClick={onClickInt}>
            {clicked ? <FavoriteOutlinedIcon className={styles.clicked} /> : <FavoriteBorderOutlinedIcon />}
        </button>
    )
}

export default AddToFavoritesButton
