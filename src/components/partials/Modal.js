import React from "react";
import ReactDOM from 'react-dom'
import styledComponents from "styled-components";
import { Button } from "../commons/buttons";

// Context
const ModalContext = React.createContext();

// Styled Components
const Background = styledComponents.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styledComponents.div`
  width: 400px;
  height: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  box-shadow: 0 0 .5rem #666
`
const ModalTop = styledComponents.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding: 1rem
`
const ModalBody = styledComponents.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem
`
const Close = styledComponents(Button)`
  color: black
`

// React Component
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = ModalContext;
  render() {
    return (this.context.modal &&
      ReactDOM.createPortal(
        <Background>
          <Wrapper>
            <ModalTop>
              <h2>Altruistic Social</h2>
              <Close onClick={this.context.openCloseModal}>X</Close>
            </ModalTop>
            <ModalBody>
              {this.props.children}
            </ModalBody>
          </Wrapper>
        </Background>,
        document.getElementById('modal')
      )
    )
  }
}

export {Modal, ModalContext}