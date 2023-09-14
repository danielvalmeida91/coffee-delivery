import { useState } from 'react'
import { AmountButton, AmountContainer, CartButton } from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

interface AmountProps {
  amount: number
  setAmount: (amount: number) => void
}

export function Amount({ amount, setAmount }: AmountProps) {
  // const [amount, setAmount] = useState<number>(1)

  function handleIncreaseAmount() {
    setAmount(amount + 1)
  }
  function handleDecreaseAmount() {
    const amountBeforeDecrease = amount
    if (amountBeforeDecrease - 1 <= 0) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
    }
  }

  return (
    <AmountContainer>
      <span>
        <AmountButton type="button" onClick={handleDecreaseAmount}>
          <Minus size={14} />
        </AmountButton>
        {amount}
        <AmountButton type="button" onClick={handleIncreaseAmount}>
          <Plus size={14} />
        </AmountButton>
      </span>
      <CartButton type="button">
        <ShoppingCart weight="fill" size={22} />
      </CartButton>
    </AmountContainer>
  )
}
