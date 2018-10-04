import React from 'react'
import styled from 'styled-components'
import quoteText from '../quoteText'

const QuoteAuthor = ({ quoteAuthor, className }) => (
  <p className={className}>{`—${quoteAuthor}`}</p>
)

export default styled(QuoteAuthor)`
  text-align: right;
  font-size: 20px;
  margin: 12px 0 12px 0;
`
