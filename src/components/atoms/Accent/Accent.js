import styled from 'styled-components'

const Accent = styled.span`
  color: ${({ withoutColor, theme }) =>
    withoutColor ? 'inherit' : theme.accent};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`
export default Accent
