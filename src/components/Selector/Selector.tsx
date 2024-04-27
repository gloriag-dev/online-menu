import { Dispatch, SetStateAction } from "react"
import { Category } from "../../pages/Menu/Menu"
import styles from "./styles.module.scss"

type SelectorProps = {
    categories: Category[]
    setCategoryId: Dispatch<SetStateAction<string>>
}
export const Selector = ({ categories, setCategoryId }: SelectorProps) => {
    return (
        <div className={styles.leftCol}>
            <section className={styles.selector}>
                <button onClick={() => setCategoryId("")}>All Dishes</button>
                {categories.map(category => {
                    return <button onClick={() => setCategoryId(category.id)}>{category.label}</button>
                })}
            </section>
        </div>
    )
}
