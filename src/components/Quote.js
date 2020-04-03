import React from 'react'

export default class Quote extends React.Component {

    render() {
    return (
      <>

        <div className="QuoteWrapper">
          <div className="quote">
            „Wiedzę możemy zdobywać od innych, ale mądrości musimy nauczyć się sami.”
          </div>
          <div className="quoteAuthor">
            - Adam Mickiewicz
          </div>
        </div>

      </>
    )
  }

}