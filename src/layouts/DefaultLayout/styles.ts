import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  margin: 2rem auto;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`
