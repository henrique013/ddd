import styles from '@/components/Header/Header.module.css'
import HeaderToggle from '@/components/Header/HeaderToggle'

function Header() {
  return (
    <header className={styles.header}>
      <div className="pageContainer">
        <h1 className={styles.title}>
          <i className="bx bxs-phone"></i>DDD Brasil
        </h1>
        <HeaderToggle />
      </div>
    </header>
  )
}

export default Header
