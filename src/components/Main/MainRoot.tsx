import styles from '@/components/Main/MainRoot.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function MainRoot({ children }: Props) {
  return (
    <main className={styles.mainRoot}>
      <div className="pageContainer">
        {children}
        <div className="helperText">
          <p className="textMuted">Digite um DDD brasileiro para ver as principais cidades</p>
          <p className="textSmall">Exemplos: 11 (São Paulo), 21 (Rio de Janeiro), 31 (Belo Horizonte)</p>
        </div>
      </div>
    </main>
  )
}

export default MainRoot
