import styles from '@/components/Header/HeaderThemeToggle.module.css'

function HeaderThemeToggle() {
  const type = 'moon' // moon | sun

  return (
    <button className={styles.headerThemeToggle} aria-label="Alternar modo escuro">
      <i className={`bx bx-${type}`}></i>
    </button>
  )
}

export default HeaderThemeToggle
