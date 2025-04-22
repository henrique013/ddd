import styles from '@/components/CitiesList/CitiesList.module.css'

type Props = {
  ddd: string
  cities: string[]
}

function CitiesList(props: Props) {
  return (
    <div className={styles.citiesList}>
      <h3>Cidades com DDD {props.ddd}:</h3>
      <ul>
        {props.cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesList
