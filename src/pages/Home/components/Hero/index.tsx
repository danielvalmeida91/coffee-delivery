import {
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroTags,
  HeroTagsContainer,
  HeroTitle,
} from './styles'
import { Timer, ShoppingCart, Package, Coffee } from '@phosphor-icons/react'
import Banner from '../../../../assets/banner-hero.svg'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeroTitle>
        <HeroTagsContainer>
          <div>
            <HeroTags bgcolor="yellowDark">
              <ShoppingCart weight="fill" size={16} />
              <p>Compra simples e segura</p>
            </HeroTags>
            <HeroTags bgcolor="yellow">
              <Timer weight="fill" size={16} />
              <p>Entrega rápida e rastreada</p>
            </HeroTags>
          </div>
          <div>
            <HeroTags bgcolor="gray">
              <Package weight="fill" size={16} />
              <p>Embalagem mantém o café intacto</p>
            </HeroTags>
            <HeroTags bgcolor="purple">
              <Coffee weight="fill" size={16} />
              <p>O café chega fresquinho até você</p>
            </HeroTags>
          </div>
        </HeroTagsContainer>
      </HeroContent>

      <HeroImage>
        <img
          src={Banner}
          alt="Um copo de café com alguns grãos de café e acessórios em torno do copo."
        />
      </HeroImage>
    </HeroContainer>
  )
}
