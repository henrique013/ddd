import styles from '@/components/Header/HeaderThemeToggle.module.css'
import { Theme } from '@/components/App/App'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

function HeaderThemeToggle(props: Props) {
  const type = props.theme === 'light' ? 'moon' : 'sun'

  return (
    <button className={styles.headerThemeToggle} aria-label="Alternar modo escuro" onClick={props.onToggleTheme}>
      <i className={`bx bx-${type}`}></i>
    </button>
  )
}

export default HeaderThemeToggle
