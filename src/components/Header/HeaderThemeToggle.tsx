import styles from '@app/components/Header/HeaderThemeToggle.module.css'
import { useTheme } from '@app/hooks/useTheme.ts'

function HeaderThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const type = theme === 'light' ? 'moon' : 'sun'

  return (
    <button className={styles.headerThemeToggle} aria-label="Alternar modo escuro" onClick={toggleTheme}>
      <i className={`bx bx-${type}`}></i>
    </button>
  )
}

export default HeaderThemeToggle
