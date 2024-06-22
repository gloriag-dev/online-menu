import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
import { Box } from "../Box/Box"
export const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate("./home")
    }
    return (
        <Box className={styles.navRoot}>
            <Box className={styles.stickyWrapper}>
                <Box className={styles.sticky}>
                    <Box className={styles.nav}>
                        <Box className={styles.logo} onClick={handleNavigateHome}>
                            <Logo width={106} height={80} />
                        </Box>

                        <Box className={styles.links}>
                            <Link to="/home" className={styles.link}>
                                Home
                            </Link>

                            <Link to="/menu" className={styles.link}>
                                Menu
                            </Link>

                            <Link to="/reserved-area" className={styles.link}>
                                Reserved Area
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
