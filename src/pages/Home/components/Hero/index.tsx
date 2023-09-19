import {
  HeroBenefitsContainer,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from './styles'
import { Timer, ShoppingCart, Package, Coffee } from '@phosphor-icons/react'
import Banner from '../../../../assets/banner-hero.svg'
import { RegularText } from '../../../../components/Typography'
import { InfoIcon } from '../../../../components/InfoIcon'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()
  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <HeroBenefitsContainer>
            <InfoIcon
              iconBackground={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              iconBackground={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoIcon
              iconBackground={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoIcon
              iconBackground={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </HeroBenefitsContainer>
        </div>

        <img
          src={Banner}
          alt="Um copo de café com alguns grãos de café e acessórios em torno do copo."
        />
      </HeroContent>
    </HeroContainer>
  )
}
