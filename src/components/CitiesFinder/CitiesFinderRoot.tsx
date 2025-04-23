import styles from '@/components/CitiesFinder/CitiesFinderRoot.module.css'
import DddForm from '@/components/DddForm/DddForm'
import CitiesList from '@/components/CitiesList/CitiesList'
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
      <h2>Busca de Cidades por DDD</h2>
      <DddForm onSuccess={handleSuccess} onError={handleError} />
      {result.cities.length > 0 && <CitiesList ddd={result.ddd} cities={result.cities} />}
    </div>
  )
}

export default CitiesFinderRoot
