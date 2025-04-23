import styles from '@/components/App/App.module.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = '@ddd:theme'

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem(STORAGE_KEY, newTheme)
      return newTheme
    })
  }

  return (
    <div className={`${styles.app} ${theme}`}>
      <Header.Root theme={theme} onToggleTheme={handleToggleTheme} />
      <Main.Root />
      <Footer.Root />
    </div>
  )
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  return (savedTheme as Theme) || 'light'
}

export default App
