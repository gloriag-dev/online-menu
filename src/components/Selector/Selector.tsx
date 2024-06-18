import clsx from "clsx"
import { Category } from "../../pages/Menu/Menu"
import styles from "./styles.module.scss"
import AllDishes from "../Icons/AllDishes"

type SelectorProps = {
    categories: Category[]
    onSetCategory?: (categoryId: string) => void
    categoryId?: string
    className?: string
}

export const Selector = ({ categories, className, onSetCategory, categoryId }: SelectorProps) => {
    return (
        <section className={clsx(styles.selector, className)}>
            <button className={styles.allDishesBtn} onClick={() => onSetCategory?.("")}>
                <AllDishes /> All Dishes
            </button>
            {categories.map(category => {
                const isSelected = category.id === categoryId
                return (
                    <div className={styles.btn} onClick={() => onSetCategory?.(category.id)} key={category.id}>
                        {category.icon}
                        <button key={category.id} onClick={() => onSetCategory?.(category.id)} className={clsx({ [styles.active]: isSelected })}>
                            {category.label}
                        </button>
                    </div>
                )
            })}
        </section>
    )
}
