import { Link } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
import { useEffect, useRef, useState } from "react"
export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const isNarrowScreen = window.matchMedia("(max-width: 765px)").matches
    const [open, setOpen] = useState(false)
    const newRef = useRef<HTMLDivElement>()

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    })
    const handleOutsideClick = e => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setOpen(false)
        }
    }
    const toggleMenu = () => {
        setOpen(!open)
    }
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

                    {!isNarrowScreen && (
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
                    )}

                    {isNarrowScreen && (
                        <div className={styles.narrowScreen}>
                            <button onClick={toggleMenu} className={styles.burgerButton}>
                                ☰
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {open && (
                <div className={styles.burgerDropdown} ref={newRef}>
                    <Link to="/home" className={styles.minilink} onClick={() => setOpen(!open)}>
                        Home
                    </Link>

                    <Link to="/menu" className={styles.minilink} onClick={() => setOpen(!open)}>
                        Menu
                    </Link>
                    <Link to="/checkout-wizard" className={styles.minilink} onClick={() => setOpen(!open)}>
                        Reserved Area
                    </Link>
                    <Link to="/order" className={styles.minilink} onClick={() => setOpen(!open)}>
                        Go to Order
                    </Link>
                </div>
            )}
        </div>
    )
}
