import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle" weight={800}>
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
// import {
//   // AmountButton,
//   Card,
//   Tag,
//   CardsContainer,
//   // CartButton,
//   Price,
//   PriceContainer,
//   // Quantities,
//   Container,
//   TagContainer,
// } from './styles'

// import { coffees } from '../../../../data/coffees'

// // import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
// import { Amount } from '../../../../components/Amount'

// export function Cards() {
//   return (
//     <CardsContainer>
//       <h1>Nossos cafés</h1>
//       <Container>
//         {coffees &&
//           coffees.map((coffee) => (
//             <Card key={coffee.title}>
//               <img src={coffee.img} alt="" />
//               <TagContainer>
//                 {coffee.tag.map((item) => (
//                   <Tag key={item}>{item}</Tag>
//                 ))}
//               </TagContainer>

//               <h2>{coffee.title}</h2>
//               <p>{coffee.description}</p>
//               <PriceContainer>
//                 <Price>
//                   <span>
//                     &nbsp;
//                     {new Intl.NumberFormat('pt-BR', {
//                       style: 'currency',
//                       currency: 'BRL',
//                     }).format(coffee.value)}
//                   </span>
//                 </Price>
//                 <Amount />
//               </PriceContainer>
//             </Card>
//           ))}
//       </Container>
//     </CardsContainer>
//   )
// }
