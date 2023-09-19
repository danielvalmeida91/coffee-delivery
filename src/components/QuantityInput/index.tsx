import { Minus, Plus } from '@phosphor-icons/react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputContainerProps {
  size?: 'small' | 'medium'
}
export function QuantityInput({
  size = 'medium',
}: QuantityInputContainerProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
