import { Input } from '../../components/Input'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <span>Endereço de entrega</span>
        <form action="">
          <label htmlFor="cep" />
          <Input />
        </form>
      </div>
    </CheckoutContainer>
  )
}
