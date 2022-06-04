import styledComponents from "styled-components"

const Avatar = styledComponents.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid lightgrey;
  margin-right: 1rem;
`
const NoAvatar = styledComponents(Avatar)`
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4rem;

`
const UserName = styledComponents.span`
  font-weight: bold;
`
const Wrapper = styledComponents.div`
  display: flex;
  align-items: center;
`

export default function User({user}) {
  return (
    <Wrapper>
      {user.avatar ?
        <Avatar src={user.avatar} alt={user.name + ' avatar'} /> :
        <NoAvatar as="div">{user.firstName.charAt(0) + user.lastName.charAt(0)}</NoAvatar>
      }
      <UserName>{user.firstName} {user.lastName}</UserName>
    </Wrapper>
  )
}