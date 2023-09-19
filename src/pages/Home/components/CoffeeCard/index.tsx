import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { FormatMoney } from '../../../../utils/formatMoney'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeTagContainer,
  Description,
  Name,
} from './styles'

export interface Coffee {
  id: number
  img: string
  tag: string[]
  title: string
  description: string
  value: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = FormatMoney(coffee.value)
  return (
    <CoffeeCardContainer>
      <img src={coffee.img} alt="" />
      <CoffeeTagContainer>
        {coffee.tag.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </CoffeeTagContainer>
      <Name>{coffee.title}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
