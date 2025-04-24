import styles from '@/components/CitiesFinder/CitiesFinderList.module.css'

type Props = {
  cities: string[]
}

function CitiesFinderList(props: Props) {
  return (
    <div className={styles.citiesFinderList}>
      <h3>Total de cidades: {props.cities.length}</h3>
      <ul>
        {props.cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default CitiesFinderList
