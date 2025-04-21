import styles from '@/components/CityFinder/CityFinder.module.css'
import DddForm from '@/components/DddForm/DddForm'

function CityFinder() {
  return (
    <div className={styles.cityFinder}>
      <h2>Busca de Cidades por DDD</h2>
      <DddForm
        onSuccess={(cities: string[]) => console.log('Cidades encontradas', cities)}
        onError={() => console.warn('Erro ao buscar cidades')}
      />
    </div>
  )
}

export default CityFinder
