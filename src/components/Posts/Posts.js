import React from 'react'
import Post from './post/post'
import useStyles from './Styles'

function Posts() {
    const classes = useStyles()
  return (
    <div>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts