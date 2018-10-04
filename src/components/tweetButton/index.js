import styled from 'styled-components'
import Button from '../button'

const baseTweetUrl = 'https://twitter.com/intent/tweet?text='

const TweetButton = styled(Button).attrs({
  href: props =>
    baseTweetUrl + encodeURI(props.quoteText + '\n—' + props.quoteAuthor),
  target: '_blank'
})``

export default TweetButton
