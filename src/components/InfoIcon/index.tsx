import { ReactNode } from 'react'
import { IconContainer, InfoIconContainer } from './styles'

interface InfoIconProps {
  iconBackground: string
  icon: string | ReactNode
  text: string | ReactNode
}

export function InfoIcon({ iconBackground, icon, text }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <IconContainer iconBackground={iconBackground}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoIconContainer>
  )
}
