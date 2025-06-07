import { ReactNode, useState } from 'react'
import { Theme, ThemeContext } from '@app/contexts/Theme/ThemeContext'

const STORAGE_KEY = '@ddd:theme'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(getStorageTheme)

  function toggleTheme() {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem(STORAGE_KEY, newTheme)
      return newTheme
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

function getStorageTheme(): Theme {
  const theme = localStorage.getItem(STORAGE_KEY)
  return (theme as Theme) ?? 'light'
}
