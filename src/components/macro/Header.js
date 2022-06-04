import styledComponents from "styled-components"

const HeaderStyled = styledComponents.header`
  width: 100%;
  background-color: rgb(88, 92, 204);
  text-align: center;
  padding: 1rem;
  position: fixed;
`
const Title = styledComponents.h1`
  color: white;
`

export default function Header() {
  return (
    <HeaderStyled>
      <Title>Altruistic Social</Title>
    </HeaderStyled>
  )
}