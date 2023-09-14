import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  height: 6.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      padding: 0.625rem 0.5rem;

      color: ${(props) => props.theme['purple-900']};
      background: ${(props) => props.theme['purple-100']};

      border-radius: 8px;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.375rem;
      height: 2.375rem;

      border: 0;
      border-radius: 8px;

      color: ${(props) => props.theme['yellow-900']};
      background: ${(props) => props.theme['yellow-100']};
    }
  }
`
