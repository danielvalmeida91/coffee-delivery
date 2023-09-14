import {
  // AmountButton,
  Card,
  Tag,
  CardsContainer,
  // CartButton,
  Price,
  PriceContainer,
  // Quantities,
  Container,
  TagContainer,
} from './styles'

import { images } from '../../../../assets/images'

// import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Amount } from '../../../../components/Amount'
import { useState } from 'react'

interface CardProps {
  img: string
  tag: string[]
  title: string
  description: string
  value: number
}

export const coffees: CardProps[] = [
  {
    img: images.ExpressoTradicional,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tag: ['TRADICIONAL', 'PURO', 'CHOCOLATE'],
  },
  {
    img: images.ExpressoAmericano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    tag: ['TRADICIONAL'],
  },
  {
    img: images.ExpressoCremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    tag: ['TRADICIONAL'],
  },
  {
    img: images.ExpressoGelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    tag: ['TRADICIONAL', 'GELADO'],
  },
  {
    img: images.CafeComLeite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    img: images.Latte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    img: images.Capuccino,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    img: images.Machiatto,
    title: 'Machiatto',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    img: images.Mocaccino,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    img: images.ChocolateQuente,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    tag: ['ESPECIAL', 'COM LEITE'],
  },
  {
    img: images.Cubano,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    tag: ['ESPECIAL', 'ALCÓLICO', 'GELADO'],
  },
  {
    img: images.Havaiano,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    tag: ['ESPECIAL'],
  },
  {
    img: images.Arabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    tag: ['ESPECIAL'],
  },
  {
    img: images.Irlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    tag: ['ESPECIAL', 'ALCÓLICO'],
  },
]

export function Cards() {
  const [amount, setAmount] = useState<number>(0)

  function handleSetAmount() {
    setAmount(amount + 1)
  }

  return (
    <CardsContainer>
      <h1>Nossos cafés</h1>
      <Container>
        {coffees &&
          coffees.map((coffee) => (
            <Card key={coffee.title}>
              <img src={coffee.img} alt="" />
              <TagContainer>
                {coffee.tag.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagContainer>

              <h2>{coffee.title}</h2>
              <p>{coffee.description}</p>
              <PriceContainer>
                <Price>
                  <span>
                    &nbsp;
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(coffee.value)}
                  </span>
                </Price>
                <Amount amount={amount} setAmount={handleSetAmount} />
              </PriceContainer>
            </Card>
          ))}
      </Container>
    </CardsContainer>
  )
}
