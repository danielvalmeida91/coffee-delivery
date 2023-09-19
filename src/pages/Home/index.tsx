import { HomeContainer } from './styles'
import { Hero } from './components/Hero'
import { OurCoffees } from './components/OurCoffees'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <OurCoffees />
    </HomeContainer>
  )
}
