import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import TweetButton from '../tweetButton'

const LayoutButtons = styled.div`
  display: flex;
  justify-content: center;
  ${TweetButton} {
    margin-left: 10px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    ${TweetButton} {
      margin: 5px 0 0;
    }
  }
`
export default ({ onLoadQuote, quoteText, quoteAuthor }) => (
  <LayoutButtons>
    <Button onClick={onLoadQuote}>new Quote</Button>
    <TweetButton as="a" quoteText={quoteText} quoteAuthor={quoteAuthor}>
      tweet
    </TweetButton>
  </LayoutButtons>
)
