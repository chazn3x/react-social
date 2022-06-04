import React from "react";
import styledComponents from "styled-components";
import posts from '../../data/posts.json';
import user from '../../data/user.json';
import NewPost from "../partials/NewPost";
import Post from "../partials/Post";

posts.sort((a, b) => {
  return new Date(`${b.time} ${b.date}`) - new Date(`${a.time} ${a.date}`)
})

const MainStyled = styledComponents.main`
  padding-top: 4rem;
`

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user,
      posts
    }
    this.newPost = this.newPost.bind(this)
    this.likePost = this.likePost.bind(this)
  }
  newPost(post) {
    const allPosts = this.state.posts
    post.id = allPosts.length + 1
    allPosts.unshift(post)
    this.setState({posts: allPosts})
  }
  likePost(id) {
    const allPosts = this.state.posts
    const i = allPosts.findIndex(el => el.id === id)
    allPosts[i].liked ? allPosts[i].likes -- : allPosts[i].likes ++
    allPosts[i].liked = !allPosts[i].liked
    this.setState({posts: allPosts})
  }
  render() {
    return (
      <MainStyled>
        <NewPost user={this.state.user} newPost={this.newPost}/>
        {this.state.posts.map(post => {
          return <Post key={post.id} post={post} like={this.likePost}/>
        })}
      </MainStyled>
    )
  }
}