import Logo from "./Logo"
import Burger from "./Burger"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.controls}>
        <button className={styles.btn}>
          Get in touch
        </button>
        <div className={styles.burger}>
          <Burger />
        </div>
      </div>
    </div>
  )
}

