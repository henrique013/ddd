import { Home } from '@/components/Home'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { CitiesFinder } from '@/components/CitiesFinder'

function App() {
  return (
    <Home.Root>
      <Header.Root>
        <Header.ThemeToggle />
      </Header.Root>
      <Main.Root>
        <CitiesFinder.Root />
      </Main.Root>
      <Footer.Root />
    </Home.Root>
  )
}

export default App
