import styled from 'styled-components'

// export const AmountContainer = styled.div``

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme['gray-400']};
  }
`

export const BaseButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme.white};
`

export const AmountButton = styled(BaseButton)`
  color: ${(props) => props.theme['gray-900']};
  background: ${(props) => props.theme['gray-400']};
  svg {
    fill: ${(props) => props.theme['purple-500']};

    &:hover {
      fill: ${(props) => props.theme['purple-900']};
      transition: fill 0.2s;
    }
  }

  &:hover {
  }
`

export const CartButton = styled(BaseButton)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-900']};
  padding: 0.5rem;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const Price = styled.div`
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`
