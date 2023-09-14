import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <span>
          <MapPin weight="fill" size={20} />
          Leopoldina, MG
        </span>
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </HeaderContainer>
  )
}
