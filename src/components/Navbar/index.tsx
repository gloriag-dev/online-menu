import { Link } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import RightArrow from "../Icons/RightArrow";
import styles from "./Navbar.module.scss";
import { useState } from "react";
export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const showDropdown = () => {
    setOpenDropdown(true);
  };
  const hideDropdown = () => {
    setOpenDropdown(false);
  };
  return (
    <div className={styles.sticky}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Logo width={106} height={106} />
        </div>
        <div className={styles.links}>
          <Link to='/home' className={styles.link}>
            Home
          </Link>
          <Link to='/about-us' className={styles.link}>
            About us
          </Link>
          <Link to='/gallery' className={styles.link}>
            Gallery
          </Link>
          <Link to='/menu' className={styles.link}>
            Menu
          </Link>
          <div className={styles.dropdownLink}>
            <button className={styles.link} onMouseEnter={showDropdown}>
              Pages
            </button>
            {openDropdown && (
              <div
                className={styles.dropdown}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Link to='/blog' className={styles.submenu}>
                  Blog
                </Link>
                <Link to='/blog-details' className={styles.submenu}>
                  Blog Details
                </Link>
                <Link to='/faq' className={styles.submenu}>
                  FAQ
                </Link>
                <Link to='/404' className={styles.submenu}>
                  404
                </Link>
              </div>
            )}
          </div>
          <Link to='/contact-us' className={styles.link}>
            Contact Us
          </Link>
          <button className={styles.primaryBtn}>
            Book Now
            <div className={styles.icon}>
              <RightArrow />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
