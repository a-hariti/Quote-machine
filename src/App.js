import React, { Component } from 'react'
import getQuote from './api'
import Loading from './components/loading'
import QuoteContainer from './components/quoteContainer'
import Quote from './components/quote'
import Error from './components/error'
import GlobalStyle from './components/globalStyles'

class App extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    this.loadQuote()
  }
  onLoadError = error =>
    this.setState({
      loading: false,
      quote: null,
      error
    })
  loadQuote = () => {
    this.setState({
      loading: true,
      quote: null,
      error: null
    })
    getQuote()
      .then(quote => this.setState({ quote, loading: false, error: null }))
      .catch(this.onLoadError)
  }
  render() {
    let { loading, error, quote } = this.state
    return (
      <React.Fragment>
        <QuoteContainer>
          {loading && <Loading>Loading ...</Loading>}
          {error && <Error error={error} onRetry={this.loadQuote} />}
          {quote && <Quote {...quote} onLoadQuote={this.loadQuote} />}
        </QuoteContainer>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}
export default App
