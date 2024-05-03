import { IconButton } from './components/IconButton'
import { Localization } from './components/Localization'
import { Logo } from './components/Logo'
import { ShoppingCart } from '@phosphor-icons/react'

export const App = () => {
  return (
    <div className='h-screen max-w-[1440px] bg-base-white flex mx-auto'>
      
    <header>
      <nav className="h-[104px] w-full p-5 flex content-between">
        <Logo />
        <div className='flex gap-2'>
          <Localization />
          <IconButton 
            showIcon={true}
            icon={<ShoppingCart
              size={20}
              weight='fill'
              className='text-yellow-dark'
            />}
            customStyle='p-2 bg-yellow-light rounded-lg'
          />
        </div>
      </nav>
    </header>
    </div>
  )
}

