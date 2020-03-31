import React from 'react'

export default class Subject extends React.Component {

  state = {
    subject: {
      subjectName: "",
      matricExam: true,
      pointsv1: {
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
      pointsv2: {
        p18_19: 0,
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
      }
    },
    yourPointsv1: 1,
    yourPointsv2: 1
  }

  componentDidMount() {
    this.setState({ subject: this.props.subject }, () => {
      //console.log("CALCULATING")
      this.calculatePointsv1("v1")
      this.calculatePointsv1("v2")
    })
  }

  calculatePointsv1(version) {
    let overall = 0
    let local = JSON.parse(localStorage.yourPoints)

    for (let sub of this.state.subject['points' + version ]['calculationExtended']) { //for every extended subject
      let extendedOverall = sub.multiplier * local[sub.name] //calculate its points
      let basicOverall = 0

      //console.log(local)

      for (let basicSub of this.state.subject['points' + version ]['calculationExtended']) { //then check if there is basic level of this subject
        if (basicSub.name === "B" + sub.name.substring(1)) { //if there is...
          basicOverall += basicSub.multiplier * local[basicSub.name] //calculate its points
        } 
      }

      basicOverall > extendedOverall ? overall += basicOverall : overall += extendedOverall //then add to overall bigger number, from extended or basic


    }
    overall = Math.round(overall*2)/2
    if (isNaN(overall) || overall < 0) overall = "--"
    //console.log(overall)
    this.setState({yourPointsv1: overall}, () => {
      //this.calculatePointsv1("v1")
      //this.calculatePointsv1("v2")
    })
  }


  render() {

    return (
      
      <>
        <div className="Subject">
          <p className="SubjectName">{this.state.subject.subjectName}{this.state.subject.matricExam ? <span className='matricExam'>Obowiązuje egzamin wstępny (dodatkowe punkty)</span> : ""}</p>
          <p className="points pointsv2 yourPoints">{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.yourPointsv1}</p>
          <p className={"p18_19 points pointsv2 " + (this.state.yourPointsv2 >= this.state.subject.pointsv2.p18_19 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.subject.pointsv2.p18_19}</p>
          <p className="points pointsv1 yourPoints">{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.yourPointsv1}</p>
          <p className={"p17_18 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p17_18 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.subject.pointsv1.p17_18}</p>
          <p className={"p16_17 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p16_17 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.subject.pointsv1.p16_17}</p>
          <p className={"p15_16 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p15_16 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="Red cross">❌</span> : this.state.subject.pointsv1.p15_16}</p>

        </div>
      </>
    )
  }

}