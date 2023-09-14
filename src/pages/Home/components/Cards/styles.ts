import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 0 10rem;
  padding-bottom: 1.25rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-top: 2rem;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['gray-900']};
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
`

export const Card = styled.div`
  padding: 0 1.5rem;

  background: ${(props) => props.theme['gray-200']};
  max-width: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};

    margin-bottom: 8px;
  }

  p {
    text-align: center;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 1.25rem;
`

export const Tag = styled.span`
  color: ${(props) => props.theme['yellow-900']};
  background: ${(props) => props.theme['yellow-100']};
  padding: 4px 8px;

  font-weight: bold;
  font-size: 0.625rem;

  border-radius: 9999px;
`

export const PriceContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
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

export const Quantities = styled.div`
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
