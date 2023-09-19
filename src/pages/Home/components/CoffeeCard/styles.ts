import styled from 'styled-components'
import { RegularText, TitleText } from '../../../../components/Typography'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  padding: 1.25rem;
  padding-top: 0;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    border-radius: 999px;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    padding: 0.25rem 0.5rem;
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
})`
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
