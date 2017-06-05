import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.created}</p>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
