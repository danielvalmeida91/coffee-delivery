import { AmountButton, AmountContainer, CartButton } from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export function Amount() {
  return (
    <AmountContainer>
      <span>
        <AmountButton type="button">
          <Minus size={14} />
        </AmountButton>
        1
        <AmountButton type="button">
          <Plus size={14} />
        </AmountButton>
      </span>
      <CartButton type="button">
        <ShoppingCart weight="fill" size={22} />
      </CartButton>
    </AmountContainer>
  )
}
