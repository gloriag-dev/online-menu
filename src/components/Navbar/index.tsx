import { Link } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
import { useState } from "react"
export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const showDropdown = () => {
        setOpenDropdown(true)
    }
    const hideDropdown = () => {
        setOpenDropdown(false)
    }
    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.sticky}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <Logo width={106} height={80} />
                    </div>
                    <div className={styles.links}>
                        <Link to="/home" className={styles.link}>
                            Home
                        </Link>

                        <Link to="/menu" className={styles.link}>
                            Menu
                        </Link>
                        <div className={styles.dropdownLink}>
                            <button className={styles.link} onMouseEnter={showDropdown}>
                                Pages
                            </button>
                            {openDropdown && (
                                <div className={styles.dropdown} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <Link to="/blog" className={styles.submenu}>
                                        Blog
                                    </Link>
                                    <Link to="/blog-details" className={styles.submenu}>
                                        Blog Details
                                    </Link>
                                    <Link to="/faq" className={styles.submenu}>
                                        FAQ
                                    </Link>
                                    <Link to="/404" className={styles.submenu}>
                                        404
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/checkout-wizard" className={styles.link}>
                            Reserved Area
                        </Link>
                        <Link to="/order" className={styles.link}>
                            Go to Order
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
