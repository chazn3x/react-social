import styledComponents from "styled-components";
import { ButtonGreen } from "../commons/buttons";
import PostWrapper from "./PostWrapper";

const Content = styledComponents.div`
  margin-bottom: 1rem
`
const ContentImage = styledComponents.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: .2rem
`
const Bottom = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
  padding-top: 1rem
`
const Likes = styledComponents.span`
  font-weight: bold;
  color: ${props => props.liked && 'rgb(33, 193, 139)'}
`

export default function Post(props) {
  const user = {
    firstName: props.post.firstName,
    lastName: props.post.lastName,
    avatar: props.post.avatar,
  }
  const time = new Date(props.post.date + ' ' + props.post.time)
  const formattedTime = `${time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}`
  const top = <>{formattedTime} • {props.post.date}</>
  const like = (e) => {
    e.preventDefault()
    props.like(props.post.id)
  }
  return (
    <PostWrapper user={user} top={top}>
      <Content>
        <p>{props.post.content}</p>
        {props.post.image &&
          <ContentImage src={props.post.image} alt="" />
        }
      </Content>
      <Bottom>
        <Likes liked={props.post.liked}>{props.post.likes} Likes</Likes>
        <form onSubmit={like}>
          <ButtonGreen>{props.post.liked ? 'Unlike' : 'Like'}</ButtonGreen>
        </form>
      </Bottom>
    </PostWrapper>
  )
}