import React from "react";
import styledComponents from "styled-components";
import { ButtonBlue } from "../commons/buttons";
import PostWrapper from "./PostWrapper";
import { Modal, ModalContext } from "./Modal";

const Chars = styledComponents.span`
  color: ${props => props.length > props.max && 'red'}
`
const Textarea = styledComponents.textarea.attrs({placeholder: "What are you thinking about?"})`
  width: 100%;
  border: none;
  resize: none;
  background-color: #eee;
  padding: .5rem .7rem;
  outline: none;
  font-size: 1.1rem;
  border-radius: .7rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: opacity .1s;

  &:hover {
    opacity: .8
  }
`
const FormBottom = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ImageToogle = styledComponents.a`
  color: rgb(33, 193, 139);
  cursor: pointer;

  &:hover {
    text-decoration: underline
  }
`
const ImageInput = styledComponents.input.attrs({type: "text", placeholder: "Image URL"})`
  border: none;
  background-color: #eee;
  padding: .5rem .7rem;
  outline: none;
  border-radius: .4rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: opacity .1s;

  &:hover {
    opacity: .8
  }
`

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      maxChars: 150,
      error: '',
      image: false,
      imageSrc: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addImage = this.addImage.bind(this)
  }
  static contextType = ModalContext
  handleChange(e) {
    const value = e.target.value
    const name = e.target.name
    this.setState({[name]: value})
  }
  handleSubmit(e) {
    e.preventDefault()

    if (this.state.content === '') {
      this.setState({error: "You can't share an empty post!"})
      this.context.openCloseModal()
    } else if (this.state.content.length > this.state.maxChars) {
      this.setState({error: "The limit of a new post is 150 characters!"})
      this.context.openCloseModal()
    } else {
      const firstName = this.props.user.firstName
      const lastName = this.props.user.lastName
      const avatar = this.props.user.avatar
      const date = new Date()
      const formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
      const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      const newPost = {
        id: null,
        firstName,
        lastName,
        date: formattedDate,
        time: formattedTime,
        content: this.state.content,
        image: this.state.imageSrc || null,
        avatar,
        likes: 0
      }
      
      this.props.newPost(newPost)
      this.setState({content: '', image: false, imageSrc: ''})
    }
  }
  addImage() {
    const image = this.state.image
    this.setState({image: !image})
  }
  render() {
    const user = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      avatar: this.props.user.avatar
    }
    const length = this.state.content.length
    const top = <><Chars length={length} max={this.state.maxChars}>{length}</Chars>/{this.state.maxChars}</>
    return (
      <PostWrapper user={user} top={top}>
        <form onSubmit={this.handleSubmit}>
          <Textarea value={this.state.content} name="content" onChange={this.handleChange}/>
          <FormBottom>
            <div>
              <ImageToogle onClick={this.addImage}>Add an image...</ImageToogle>
              {this.state.image && 
                <ImageInput value={this.state.imageSrc} name="imageSrc" onChange={this.handleChange}/>
              }
            </div>
            <ButtonBlue>Share</ButtonBlue>
          </FormBottom>
        </form>
        <Modal>
          {this.state.error}
        </Modal>
      </PostWrapper>
    )
  }
}