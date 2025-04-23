import styles from '@/components/Main/MainRoot.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function MainRoot({ children }: Props) {
  return (
    <main className={styles.mainRoot}>
      <div className="pageContainer">{children}</div>
    </main>
  )
}

export default MainRoot
