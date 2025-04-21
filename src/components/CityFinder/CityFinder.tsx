import styles from '@/components/CityFinder/CityFinder.module.css'

function CityFinder() {
  return (
    <div className={styles.cityFinder}>
      <h2>Busca de Cidades por DDD</h2>
      <div className="formGroup">
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
          />
          <button className="btn">Buscar</button>
        </div>
        <div className="errorMessage">Por favor, digite um DDD válido</div>
      </div>
    </div>
  )
}

export default CityFinder
