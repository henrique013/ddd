import styles from '@/components/Home/HomeRoot.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function HomeRoot({ children }: Props) {
  return <div className={`${styles.homeRoot} light`}>{children}</div>
}

export default HomeRoot
