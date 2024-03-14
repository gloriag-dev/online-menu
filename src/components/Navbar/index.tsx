import { Link } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import RightArrow from "../Icons/RightArrow";
import styles from "./Navbar.module.scss";
export const Navbar = () => {
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
          <Link to='/pages' className={styles.link}>
            Pages
          </Link>
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
