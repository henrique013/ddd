import styles from '@/components/ThemeToggle/ThemeToggle.module.css'

function ThemeToggle() {
  return (
    <button id="themeToggle" className={styles.themeToggle} aria-label="Alternar modo escuro">
      {/* Moon icon (for light mode) */}
      <i id="moonIcon" className="bx bx-moon"></i>
      {/* Sun icon (for dark mode) */}
      <i id="sunIcon" className="bx bx-sun hidden"></i>
    </button>
  )
}

export default ThemeToggle
