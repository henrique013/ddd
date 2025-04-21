import styles from '@/components/App/App.module.css'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'

// TODO: remove "light-mode" class
function App() {
  return (
    <div className={`${styles.app} lightMode`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
