import React from 'react'

export default class Subject extends React.Component {

  state = {
    subject: {
      subjectName: "",
      matricExam: true,
      new: "",
      cancelled: "",
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
    yourPointsv2: 1,
    usedSubjects: []
  }

  componentDidMount() {
    this.setState({ subject: this.props.subject }, () => {
      //console.log("CALCULATING")
      this.calculatePointsv1("v1")
      this.calculatePointsv1("v2")
    })
  }

  getBestFromExtendedAndBasic(version, subExt) {

    let local = JSON.parse(localStorage.yourPoints)
    let extendedOverall = subExt.multiplier * local[subExt.name]
    let basicOverall = 0
    //console.log(extendedOverall)
    let basicNameToCompare = "B" + subExt.name.substring(1)
    let subjectUsed = ""
    let overall = 0

    for (let subBas of this.state.subject['points' + version]['calculationBasic']) {
      if (subBas.name === basicNameToCompare) {
        basicOverall = subBas.multiplier * local[subBas.name]
        subjectUsed = subBas.name
      } 
    }

    //console.log(basicOverall + "B " + extendedOverall + "E ")

    if (basicOverall > extendedOverall) {
      overall = basicOverall
    } else {
      subjectUsed = subExt.name;
      overall = extendedOverall
    }

    //console.log("Used " + subjectUsed)

    //console.log(local)
    //console.log(subExt.name)
    //console.log(local[subExt.name])


    // let correspondingBasicSub = "B" + sub.name.substring(1)
    // let overall = 0;
    // let basicOverall = 0;
    // let extendedOverall = 0;
    // let local = JSON.parse(localStorage.yourPoints)
    // let usedSubject = ""

    // for (let sub of this.state.subject['points' + version]['calculationExtended']) {
    //   if (basicSub.name === correspondingBasicSub) { //if there is...
    //     basicOverall += basicSub.multiplier * local[basicSub.name] //calculate its points
    //   }
    // }

    // if (basicOverall > )

    overall = Math.round(overall * 2) / 2
    if (isNaN(overall) || overall < 0) overall = "--"

    return {overall: overall, used: subjectUsed}


  }

  calculatePointsv1(version) {

    let overall = 0;
    let used = []

    for (let sub of this.state.subject['points' + version]['calculationExtended']) {

      let subCalculation;

      if (Array.isArray(sub)) {
        for (let subArrElem of sub) {
          subCalculation = this.getBestFromExtendedAndBasic(version, subArrElem)
        }
      } else {
        subCalculation = this.getBestFromExtendedAndBasic(version, sub)
      }
      
      //console.log(subCalculation)
      overall += subCalculation.overall;
      used.push(subCalculation.used)

    }

    this.setState({ yourPointsv1: overall })
    // this.setState(prevState => ({
    //   used: [...prevState.used, newelement]
    // }))
    this.setState({ usedSubjects: JSON.stringify(used) })
    console.log(this.state.usedSubjects)

    // let overall = 0
    // let local = JSON.parse(localStorage.yourPoints)

    // for (let sub of this.state.subject['points' + version]['calculationExtended']) { //for every extended subject

    //   if (!Array.isArray(sub)) {
    //     let extendedOverall = sub.multiplier * local[sub.name] //calculate its points
    //     let basicOverall = 0

    //     for (let basicSub of this.state.subject['points' + version]['calculationExtended']) { //then check if there is basic level of this subject
          
    //     }
    //     basicOverall > extendedOverall ? overall += basicOverall : overall += extendedOverall //then add to overall bigger number, from extended or basic

    //   } else {
    //     for (let partialSubject of sub) {

    //       let partialOveral

    //     }
    //   }

      // let extendedOverall = sub.multiplier * local[sub.name] //calculate its points
      // let basicOverall = 0

      // //console.log(local)

      // for (let basicSub of this.state.subject['points' + version ]['calculationExtended']) { //then check if there is basic level of this subject
      //   if (basicSub.name === "B" + sub.name.substring(1)) { //if there is...
      //     basicOverall += basicSub.multiplier * local[basicSub.name] //calculate its points
      //   } 
      // }

      // basicOverall > extendedOverall ? overall += basicOverall : overall += extendedOverall //then add to overall bigger number, from extended or basic
      //console.log(Array.isArray(sub))
      //console.log(sub)

    // }
    // overall = Math.round(overall * 2) / 2
    // if (isNaN(overall) || overall < 0) overall = "--"
    // //console.log(overall)
    // this.setState({ yourPointsv1: overall }, () => {
    //   //this.calculatePointsv1("v1")
    //   //this.calculatePointsv1("v2")
    // })
  }


  render() {

    return (

      <>
        <div className="Subject">
          <p className="SubjectName">{this.state.subject.subjectName}{this.state.subject.matricExam ? <span className='matricExam'>Obowiązuje egzamin wstępny (dodatkowe punkty)</span> : ""}{this.state.subject.new ? <span className='newCourse'>NOWOŚĆ!</span> : ""}{this.state.subject.cancelled ? <span className='courseCancelled'><span role="img" aria-label="Yellow circle">🟡</span> Kierunek zamknięty</span> : ""}</p>
          <p className="points pointsv2 yourPoints">{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.yourPointsv1}</p>
          <p className={"p18_19 points pointsv2 " + (this.state.yourPointsv2 >= this.state.subject.pointsv2.p18_19 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv2.p18_19}</p>
          <p className="points pointsv1 yourPoints">{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.yourPointsv1}</p>
          <p className={"p17_18 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p17_18 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p17_18}</p>
          <p className={"p16_17 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p16_17 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p16_17}</p>
          <p className={"p15_16 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p15_16 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p15_16}</p>

        </div>
      </>
    )
  }

}