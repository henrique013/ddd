import { Home } from '@app/components/Home'
import { Header } from '@app/components/Header'
import { Main } from '@app/components/Main'
import { Footer } from '@app/components/Footer'
import { CitiesFinder } from '@app/components/CitiesFinder'
import { ThemeProvider } from '@app/contexts/Theme/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Home.Root>
        <Header.Root>
          <Header.ThemeToggle />
        </Header.Root>
        <Main.Root>
          <CitiesFinder.Root />
        </Main.Root>
        <Footer.Root />
      </Home.Root>
    </ThemeProvider>
  )
}

export default App
