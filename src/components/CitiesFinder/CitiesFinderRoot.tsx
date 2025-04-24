import styles from '@/components/CitiesFinder/CitiesFinderRoot.module.css'
import { CitiesFinder } from '@/components/CitiesFinder'
import { useState } from 'react'

function CitiesFinderRoot() {
  const [cities, setCities] = useState<string[]>([])

  const handleStart = () => {
    setCities([])
  }

  const handleSuccess = (citiesFound: string[]) => {
    setCities(citiesFound)
  }

  return (
    <div className={styles.citiesFinderRoot}>
      <div className="content">
        <h2 className="title">Busca de Cidades por DDD</h2>
        <CitiesFinder.Form onStart={handleStart} onSuccess={handleSuccess} />
        {cities.length > 0 && <CitiesFinder.List cities={cities} />}
      </div>
      <div className="helperText">
        <p className="textMuted">Digite um DDD brasileiro para ver as principais cidades</p>
        <p className="textSmall">Exemplos: 11 (São Paulo), 21 (Rio de Janeiro), 31 (Belo Horizonte)</p>
      </div>
    </div>
  )
}

export default CitiesFinderRoot
