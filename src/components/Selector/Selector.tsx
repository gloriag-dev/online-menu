import {} from "react"
import { Category } from "../../pages/Menu/Menu"
import styles from "./styles.module.scss"

type SelectorProps = {
    categories: Category[]
    onSetCategory?: (categoryId: string) => void
}
export const Selector = ({ categories, onSetCategory }: SelectorProps) => {
    return (
        <section className={styles.selector}>
            <button onClick={() => onSetCategory?.("")}>All Dishes</button>
            {categories.map(category => {
                return <button onClick={() => onSetCategory?.(category.id)}>{category.label}</button>
            })}
        </section>
    )
}
