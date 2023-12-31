import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;
`
interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  min-width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};

  &:focus {
    box-shadow: none;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors['brand-purple']};
      }
    `}
`
