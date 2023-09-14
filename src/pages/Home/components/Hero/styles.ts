import styled from 'styled-components'
import Background from '../../../../assets/background.svg'

export const HeroContainer = styled.div`
  padding: 5.75rem 10rem;

  background-image: url(${Background});

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 4.125rem;
`

export const HeroTitle = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const HeroTagsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  > div + div {
    margin-left: 2.5rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    gap: 1.25rem;
  }
`
const ICON_COLORS = {
  yellowDark: 'yellow-900',
  yellow: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface HeroTagsProps {
  bgcolor: keyof typeof ICON_COLORS
}

export const HeroTags = styled.div<HeroTagsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme['gray-700']};
  }

  svg {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[ICON_COLORS[props.bgcolor]]};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 9px;
  }
`

export const HeroImage = styled.div`
  img {
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`
