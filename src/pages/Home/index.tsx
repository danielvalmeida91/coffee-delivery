import { HomeContainer } from './styles'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Hero />
        <Cards />
      </HomeContainer>
    </>
  )
}
