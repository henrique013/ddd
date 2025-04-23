import styles from '@/components/Main/Main.module.css'
import { CitiesFinder } from '@/components/CitiesFinder'

function Main() {
  return (
    <main className={styles.main}>
      <div className="pageContainer">
        <CitiesFinder.Root />
        <div className="helperText">
          <p className="textMuted">Digite um DDD brasileiro para ver as principais cidades</p>
          <p className="textSmall">Exemplos: 11 (São Paulo), 21 (Rio de Janeiro), 31 (Belo Horizonte)</p>
        </div>
      </div>
    </main>
  )
}

export default Main
