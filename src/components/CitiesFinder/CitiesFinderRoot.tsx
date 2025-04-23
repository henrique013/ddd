import styles from '@/components/CitiesFinder/CitiesFinderRoot.module.css'
import { CitiesFinder } from '@/components/CitiesFinder'
import { useState } from 'react'

type Result = {
  ddd: string
  cities: string[]
}

function CitiesFinderRoot() {
  const [result, setResult] = useState<Result>({ ddd: '', cities: [] })

  const handleSuccess = (ddd: string, citiesFound: string[]) => {
    setResult({ ddd, cities: citiesFound })
  }

  const handleError = () => {
    setResult({ ddd: '', cities: [] })
  }

  return (
    <div className={styles.citiesFinderRoot}>
      <div className="content">
        <h2 className="title">Busca de Cidades por DDD</h2>
        <CitiesFinder.Form onSuccess={handleSuccess} onError={handleError} />
        {result.cities.length > 0 && <CitiesFinder.List ddd={result.ddd} cities={result.cities} />}
      </div>
      <div className="helperText">
        <p className="textMuted">Digite um DDD brasileiro para ver as principais cidades</p>
        <p className="textSmall">Exemplos: 11 (São Paulo), 21 (Rio de Janeiro), 31 (Belo Horizonte)</p>
      </div>
    </div>
  )
}

export default CitiesFinderRoot
