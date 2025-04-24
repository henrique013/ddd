import styles from '@/components/CitiesFinder/CitiesFinderList.module.css'

type Props = {
  cities: string[]
}

function CitiesFinderList({ cities }: Props) {
  return (
    <div className={styles.citiesFinderList}>
      <h3>Total de cidades: {cities.length}</h3>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesFinderList
