import { IconButton } from './components/IconButton'
import { Localization } from './components/Localization'
import { Logo } from './components/Logo'
import { ShoppingCart } from '@phosphor-icons/react'

export const App = () => {
  return (
    <div className='h-screen bg-base-white flex-col mx-auto'>
      
    <header className='w-full'>
      <nav className="p-5 flex justify-between">
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

    <div id="hero" className='bg-heroBackground bg-blend-overlay bg-cover w-full h-[544px] flex'>
      <div>
        <p className='font-display font-bold text-title-xl text-base-title'>Encontre o café perfeito para qualquer hora do dia</p>
      </div>
        
    </div>
    </div>
  )
}

