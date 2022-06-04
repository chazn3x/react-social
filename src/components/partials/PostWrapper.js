import styledComponents from "styled-components";
import User from "./User";

const Wrapper = styledComponents.div`
  margin: 2rem auto;
  width: 576px;
  background-color: rgb(250,250,250);
  border: 1px solid lightgray;
  border-radius: .7rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
const TopPart = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem
`

function PostWrapper(props) {
  return (
    <Wrapper>
      <TopPart>
        <User user={props.user}/>
        <div>
          {props.top}
        </div>
      </TopPart>
      {props.children}
    </Wrapper>
  )
}

export default PostWrapper