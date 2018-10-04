const apiUrl =
    'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
  //proxy requests to this url to prevent cors-related headaches ;-)
  proxiedUrl = `https://cors-anywhere.herokuapp.com/${apiUrl}`

const getQuote = () =>
  fetch(
    process.env.NODE_ENV == 'production'
      ? proxiedUrl
      : `/api/1.0/?method=getQuote&format=json&lang=en&key=${Math.random()
          .toString()
          .slice(2, 6)}`
  ).then(res =>
    res
      .json()
      //scoped catch block to retry upon jsonparsing errors
      .catch(err => {
        console.log('error parsing json: ', err.message, '. Retrying ...')
        return getQuote()
      })
  )

export default getQuote
