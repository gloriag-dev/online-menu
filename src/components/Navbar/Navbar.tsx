import { Link } from "react-router-dom"
import { Logo } from "../Icons/Logo"
import styles from "./Navbar.module.scss"
import { useEffect, useRef, useState } from "react"
import useOrderStore from "../../stores/orderStore"
export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const isNarrowScreen = window.matchMedia("(max-width: 765px)").matches
    const [open, setOpen] = useState(false)
    const newRef = useRef<HTMLDivElement>()
    const { order } = useOrderStore()
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

                            <Link to="/checkout-wizard" className={styles.link}>
                                Reserved Area
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
                </div>
            )}
        </div>
    )
}
