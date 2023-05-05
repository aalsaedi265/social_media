import React from 'react'
import Post from './post/post'
import useStyles from './Styles'
import {useSelector} from 'react-redux'

function Posts() {
    const classes = useStyles()
    const posts = useSelector((state)=> state.posts)
  return (
    <div>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts