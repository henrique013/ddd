import styles from '@/components/Header/Header.module.css'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { Theme } from '@/components/App/App'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

function Header(props: Props) {
  return (
    <header className={styles.header}>
      <div className="pageContainer">
        <h1>
          <i className="bx bxs-phone"></i>DDD Brasil
        </h1>
        <ThemeToggle theme={props.theme} onToggleTheme={props.onToggleTheme} />
      </div>
    </header>
  )
}

export default Header
