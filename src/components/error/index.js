import React from 'react'
import Button from '../button'

export default ({ error, onRetry }) => (
  <React.Fragment>
    <p>something went wrong: {error.message}</p>
    <Button onClick={onRetry}>retry</Button>
  </React.Fragment>
)
