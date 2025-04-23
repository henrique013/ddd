import styles from '@/components/Header/HeaderRoot.module.css'
import { Theme } from '@/components/App/App'
import { Header } from '@/components/Header'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

function HeaderRoot(props: Props) {
  return (
    <header className={styles.headerRoot}>
      <div className="pageContainer">
        <h1>
          <i className="bx bxs-phone"></i>DDD Brasil
        </h1>
        <Header.ThemeToggle theme={props.theme} onToggleTheme={props.onToggleTheme} />
      </div>
    </header>
  )
}

export default HeaderRoot
