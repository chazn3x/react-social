import styledComponents from "styled-components"

const Button = styledComponents.button`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  box-shadow: none;
  border: none;
  border-radius: .5rem;
  color: white;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: .9
  }
`
const ButtonBlue = styledComponents(Button)`
  background-color: rgb(88, 92, 204);
`
const ButtonGreen = styledComponents(Button)`
  background-color: rgb(33, 193, 139);
`

export {Button, ButtonBlue, ButtonGreen}