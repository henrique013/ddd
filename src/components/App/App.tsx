import styles from '@/components/App/App.module.css'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
import { useState } from 'react'

export type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`${styles.app} ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
