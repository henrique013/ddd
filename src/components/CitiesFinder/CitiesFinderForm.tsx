import styles from '@/components/CitiesFinder/CitiesFinderForm.module.css'
import container from '@/di-container'
import { useState } from 'react'

type Props = {
  onSuccess: (ddd: string, cities: string[]) => void
  onError: () => void
}

function CitiesFinderForm(props: Props) {
  const [errorMsg, setErrorMsg] = useState('')
  const [ddd, setDdd] = useState('')

  const findCitiesByDdd = async () => {
    if (ddd.length !== 2) {
      setErrorMsg('DDD deve conter exatamente 2 dígitos')
      props.onError()
      return
    }

    try {
      const client = container.brasilApiClient()
      const cities = await client.getCitiesByDdd(ddd)

      if (errorMsg) {
        setErrorMsg('')
      }

      props.onSuccess(ddd, cities)
    } catch (error: unknown) {
      console.error(error)
      setErrorMsg('Não foi possível buscar as cidades')
      props.onError()
    }
  }

  return (
    <div className={styles.citiesFinderForm}>
      <label htmlFor="dddInput" className="dddLabel">
        DDD (Código de Área)
      </label>
      <div className="inputGroup">
        <input
          type="text"
          id="dddInput"
          className="dddInput"
          placeholder="Ex: 11"
          maxLength={2}
          pattern="[0-9]*"
          inputMode="numeric"
          value={ddd}
          onChange={(e) => setDdd(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              findCitiesByDdd()
            }
          }}
        />
        <button className="btn" onClick={findCitiesByDdd}>
          Buscar
        </button>
      </div>
      {errorMsg && <div className="errorMessage">{errorMsg}</div>}
    </div>
  )
}

export default CitiesFinderForm
