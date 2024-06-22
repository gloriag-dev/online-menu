import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
export const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate("./home")
    }
    return (
        <div className={styles.navRoot}>
            <div className={styles.stickyWrapper}>
                <div className={styles.sticky}>
                    <div className={styles.nav}>
                        <div className={styles.logo} onClick={handleNavigateHome}>
                            <Logo width={106} height={80} />
                        </div>

                        <div className={styles.links}>
                            <Link to="/home" className={styles.link}>
                                Home
                            </Link>

                            <Link to="/menu" className={styles.link}>
                                Menu
                            </Link>

                            <Link to="/reserved-area" className={styles.link}>
                                Reserved Area
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
