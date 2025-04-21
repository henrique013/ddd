import styles from '@/components/ThemeToggle/ThemeToggle.module.css'
import { Theme } from '@/components/App/App'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

function ThemeToggle(props: Props) {
  const type = props.theme === 'light' ? 'moon' : 'sun'

  return (
    <button className={styles.themeToggle} aria-label="Alternar modo escuro" onClick={props.onToggleTheme}>
      <i className={`bx bx-${type}`}></i>
    </button>
  )
}

export default ThemeToggle
