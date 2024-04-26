import { Link } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
export const Navbar = () => {
    const isNarrowScreen = window.matchMedia("(max-width: 765px)").matches

    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.sticky}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <Logo width={106} height={80} />
                    </div>

                    {!isNarrowScreen && (
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
                    )}

                    {isNarrowScreen && (
                        <div className={styles.narrowScreen}>
                            <button className={styles.burgerButton}>☰</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
