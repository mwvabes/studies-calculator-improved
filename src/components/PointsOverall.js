import React from 'react'

export default class PointsOverall extends React.Component {

  render() {

    if (this.props.noPoints === true) {
      return (
        <>
          <span><span role="img" aria-label="White square">◻️</span> Brak informacji</span>
        </>
      )
    } else return (
      <>
        Twoje punkty
        <span className="YourPoints">
          {this.props.points}
        </span>
      </>
    )

  }

}