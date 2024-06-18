import { createPortal } from "react-dom"

import { Logo } from "../../../../components/Icons/Logo"

import styles from "./Loader.module.scss"

const Loader = () => {
    return createPortal(
        <div className={styles.loaderContainer} data-testid="loader_container">
            <div className={styles.loaderContent}>
                <Logo className={styles.logo} width={100} height={100} />
            </div>
        </div>,
        document.body
    )
}

Loader.displayName = "Loader"

export { Loader }
