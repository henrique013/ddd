import styles from '@app/components/CitiesFinder/CitiesFinderForm.module.css'
import { useRef, useState } from 'react'
import { delay } from '@app/utils/time'
import { BaseError } from '@app/errors.ts'
import { container } from '@app/container/container.ts'
import { t } from '@app/container/tokens.ts'
import { IApiClient } from '@app/services/api.ts'

type Props = {
  onSuccess: (cities: string[]) => void
  onError: () => void
}

function CitiesFinderForm({ onSuccess, onError }: Props) {
  const [errorMsg, setErrorMsg] = useState('')
  const [ddd, setDdd] = useState('')
  const btnRef = useRef<HTMLButtonElement>(null)

  const findCitiesByDdd = async () => {
    if (ddd.length !== 2) {
      setErrorMsg('DDD deve conter exatamente 2 dígitos')
      return
    }

    btnRef.current!.disabled = true

    try {
      const client = container.resolve<IApiClient>(t.services.IApiClient)
      const [cities] = await Promise.all([client.getCitiesByDdd(ddd), delay(500)])

      if (errorMsg) {
        setErrorMsg('')
      }

      onSuccess(cities)
    } catch (error: unknown) {
      const msg = error instanceof BaseError ? error.message : 'Ocorreu um erro inesperado'
      setErrorMsg(msg)
      onError()
    } finally {
      btnRef.current!.disabled = false
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
        <button className="btn" ref={btnRef} onClick={findCitiesByDdd}>
          <span>Buscar</span>
          <i className="bx bx-loader-alt"></i>
        </button>
      </div>
      {errorMsg && <div className="errorMessage">{errorMsg}</div>}
    </div>
  )
}

export default CitiesFinderForm
