import React from 'react'
import Quotation from '../quotation'
import QuoteAuthor from '../quoteAuthor'
import QuoteText from '../quoteText'
import Buttons from '../buttons'

export default ({ quoteText, quoteAuthor, onLoadQuote }) => {
  quoteAuthor = quoteAuthor || 'Unknown'
  return (
    <React.Fragment>
      <Quotation />
      <QuoteText>{quoteText}</QuoteText>
      <QuoteAuthor quoteAuthor={quoteAuthor} />
      <Buttons
        onLoadQuote={onLoadQuote}
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
      />
    </React.Fragment>
  )
}
