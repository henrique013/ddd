import styles from '@/components/App/App.module.css'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
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
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <Main />
      <Footer />
    </div>
  )
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  return (savedTheme as Theme) || 'light'
}

export default App
