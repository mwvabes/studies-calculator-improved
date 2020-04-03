import React from 'react'

export default class WhatToMark extends React.Component {


  state = {
    points: {
      p15_16: "--",
      p16_17: "--",
      p17_18: "--",
      calculationBasic: [
        {
          name: "--",
          multiplier: 0
        }
      ],
      calculationExtended: [
        {
          name: "--",
          multiplier: 0
        }
      ]
    },
    voc: {
      B_PL: "Język polski p. podst.",
      B_FL: "Język obcy p. podst.",
      B_MAT: "Matematyka p. podst.",
      E_BIO: "Biologia p. roz.",
      E_CH: "Chemia p. roz.",
      E_PHI: "Filozofia p. roz.",
      E_PHY: "Fizyka p. roz.",
      E_GEO: "Geografia p. roz.",
      E_HIS: "Historia p. roz.",
      E_IT: "Informatyka p. roz.",
      E_FL: "Język obcy p. roz.",
      E_PL: "Język polski p. roz.",
      E_MAT: "Matematyka p. roz.",
      E_CIV: "WOS p. roz."
    }
  }

  componentDidMount() {
    this.setState({ points: this.props.whatToMark })
    console.log(this.state)
  }

  render() {

    return (
      <>
        <div className="WhatToMark">
          <h3>{this.props.title}</h3>
          <div className="WhatToMarkLevels">
            <div className="WhatToMarkLevelBasic">

              {this.state.points.calculationBasic.map((subject) => {
                if (Array.isArray(subject)) {

                } else {
                  return (
                    <div className="WhatToMarkRow">
                      <p className="WhatToMarkName">{this.state.voc[subject.name]}</p>
                      <p className="WhatToMarkMultiplier">{subject.multiplier}</p>
                    </div>)
                }
              }
              )}

            </div>
            <div className="WhatToMarkLevelExtended">
              {this.state.points.calculationExtended.map((subject) => {
                if (Array.isArray(subject)) {

                } else {
                  return (
                    <div className="WhatToMarkRow">
                      <p className="WhatToMarkName">{this.state.voc[subject.name]}</p>
                      <p className="WhatToMarkMultiplier">{subject.multiplier}</p>
                    </div>)
                }
              }
              )}

            </div>
          </div>




        </div>

      </>
    )
  }

}