import styles from '@/components/Header/HeaderRoot.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function HeaderRoot({ children }: Props) {
  return (
    <header className={styles.headerRoot}>
      <div className="pageContainer">
        <h1>
          <i className="bx bxs-phone"></i>DDD Brasil
        </h1>
        {children}
      </div>
    </header>
  )
}

export default HeaderRoot
