import React from 'react'
import PropTypes from 'prop-types'

import StyledPostCard from './styles'

const PostCard = ({ data }) => {
  return (
    <StyledPostCard>
      <a
        className="content"
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="title">{data.title}</p>
        <p className="date">Published on {data.date}</p>
      </a>
    </StyledPostCard>
  )
}

PostCard.propTypes = {
  data: PropTypes.object,
}

export default PostCard