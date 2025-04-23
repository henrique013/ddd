import styles from '@/components/Home/HomeRoot.module.css'
import { useTheme } from '@/hooks/useTheme.ts'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function HomeRoot({ children }: Props) {
  const { theme } = useTheme()

  return <div className={`${styles.homeRoot} ${theme}`}>{children}</div>
}

export default HomeRoot
