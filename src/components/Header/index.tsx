import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="" />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin weight="fill" size={20} />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart weight="fill" size={20} />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
