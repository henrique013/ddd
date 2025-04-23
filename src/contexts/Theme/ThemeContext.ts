import { createContext } from 'react'

export type Theme = 'light' | 'dark'

type ContextValue = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ContextValue | null>(null)
