import styles from '@/components/Header/Header.module.css'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

function Header() {
  return (
    <header className={styles.header}>
      <div className="pageContainer">
        <h1>
          <i className="bx bxs-phone"></i>DDD Brasil
        </h1>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
