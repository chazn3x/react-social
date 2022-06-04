import React from "react";
import Header from "./components/macro/Header";
import Main from "./components/macro/Main";
import { ModalContext } from "./components/partials/Modal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.openCloseModal = () => {
      this.setState(state => ({...state, modal: !state.modal}))
    }
    this.state = {
      modal: false,
      openCloseModal: this.openCloseModal
    }
  }
  render() {
    return (
      <ModalContext.Provider value={this.state}>
        <Header/>
        <Main/>
      </ModalContext.Provider>
    )
  }
}