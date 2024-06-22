import { createPortal } from "react-dom"

import { Logo } from "../../../../components/Icons/Logo"

import styles from "./Loader.module.scss"
import { Box } from "../../../../components/Box/Box"

const Loader = () => {
    return createPortal(
        <Box className={styles.loaderContainer} data-testid="loader_container">
            <Box className={styles.loaderContent}>
                <Logo className={styles.logo} width={100} height={100} />
            </Box>
        </Box>,
        document.body
    )
}

Loader.displayName = "Loader"

export { Loader }
