import styles from '@/components/CitiesFinder/CitiesFinderList.module.css'

type Props = {
  ddd: string
  cities: string[]
}

function CitiesFinderList(props: Props) {
  return (
    <div className={styles.citiesFinderList}>
      <h3>Cidades com DDD {props.ddd}:</h3>
      <ul>
        {props.cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesFinderList
