import styled from 'styled-components'
import Background from '../../../../assets/background.svg'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'
import { ReactNode } from 'react'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({
    theme,
  }) => `url(${Background}) no-repeat center, linear-gradient(
      0deg,
      ${theme.colors['base-white']} 0%,
      ${rgba(theme.colors['base-background'], 0.2)} 50%,
      ${theme.colors['base-background']} 100%
    )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const HeroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const HeroBenefitsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
