import React from 'react'
import { Collapse } from 'react-collapse';
import PointsOverall from './PointsOverall';
import WhatToMark from './WhatToMark';

export default class Subject extends React.Component {

  state = {
    collapse: {
      isOpened: false,
      classes: "collapse collapseIcon"
    },
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
      this.calculatePoints("v1")
      this.calculatePoints("v2")
    })
  }

  getBestFromExtendedAndBasic(version, subExt) {

    let local = JSON.parse(localStorage.yourPoints)
    let extendedOverall = subExt.multiplier * local[subExt.name]
    let basicOverall = 0

    let basicNameToCompare = "B" + subExt.name.substring(1)
    let subjectUsed = ""
    let overall = 0

    for (let subBas of this.state.subject['points' + version]['calculationBasic']) {
      if (subBas.name === basicNameToCompare) {
        basicOverall = subBas.multiplier * local[subBas.name]
        subjectUsed = subBas.name
      }
    }

    if (basicOverall > extendedOverall) {
      overall = basicOverall
    } else {
      subjectUsed = subExt.name;
      overall = extendedOverall
    }

    overall = Math.round(overall * 2) / 2
    if (isNaN(overall) || overall < 0) overall = "--"

    return { overall: overall, used: subjectUsed }


  }

  calculatePoints(version) {

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

      overall += subCalculation.overall;
      used.push(subCalculation.used)

    }

    if (version === "v1") {
      this.setState({ yourPointsv1: overall })
    } else {
      this.setState({ yourPointsv2: overall })
    }
    //this.setState({ yourPointsv2: overall })
    this.setState({ usedSubjects: JSON.stringify(used) })


  }

  handleCollapse(e) {

    if (this.state.collapse.isOpened) {
      let giveState = {
        collapse: {
          isOpened: false,
          classes: "collapse collapseIcon"
        }
      }
      this.setState(giveState)
    } else {
      let giveState = {
        collapse: {
          isOpened: true,
          classes: "collapse collapseIcon collapseIconUp"
        }
      }
      this.setState(giveState)
    }

  }


  render() {

    return (

      <>

        <div className="Subject">
          <div className="SubjectGeneral">
            <label className="CollapseLabel" htmlFor={this.state.subject.subjectName + "Label"} onClick={this.handleCollapse.bind(this)}>
              <p className="SubjectName">
                {this.state.subject.subjectName}
                {this.state.subject.matricExam ? <span role="img" aria-label="Page with curl">📃</span> : ""}
                {this.state.subject.new ? <span className='newCourse'>NOWOŚĆ!</span> : ""}
                {this.state.subject.cancelled ? <span role="img" aria-label="Yellow circle">🟡</span> : ""}</p>
              <p className="points pointsv2 YourPoints">{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.yourPointsv2 + " pkt."}</p>
              <p className="CollapseIconWrapper"><span className={this.state.collapse.classes}></span></p>
            </label>
          </div>

          <Collapse isOpened={this.state.collapse.isOpened} id={this.state.subject.subjectName + "Collapse"}>
            <div className="SubjectCollapse">

              <div className="SubjectRow">
                {this.state.subject.matricExam ? <span className='matricExam'><span role="img" aria-label="Page with curl">📃</span> Obowiązuje egzamin wstępny (dodatkowe punkty)</span> : ""}
                {this.state.subject.cancelled ? <span className='courseCancelled'><span role="img" aria-label="Yellow circle">🟡</span> Na ten kierunek nie jest prowadzona rekrutacja na studia I stopnia</span> : ""}
              </div>

              <div className="PointsWrapper">
                <div className="pointsSection PointsSectionV2">
                  <h3>Rekrutacja v2 (nowa, 2018/19 - obecnie)</h3>
                  <div className="SubjectRow">

                    <div className="YourPointsOverall">
                      <PointsOverall points={this.state.yourPointsv2} noPoints={this.state.subject.pointsv2.noPointsInfo} />
                    </div>

                    <div className="ThresholdSection">
                      <p>Próg 2018/19</p>
                      <p className={"p18_19 points pointsv2 " + (this.state.yourPointsv2 >= this.state.subject.pointsv2.p18_19 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv2.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv2.p18_19}</p>
                    </div>
                  </div>
                </div>

                <div className="pointsSection PointsSectionV1">
                  <h3>Rekrutacja v1 (stara, do 2017/18 włącznie)</h3>
                  <div className="SubjectRow">

                    <div className="YourPointsOverall">
                      <PointsOverall points={this.state.yourPointsv1} noPoints={this.state.subject.pointsv1.noPointsInfo} />
                    </div>

                    <div className="ThresholdSection">
                      <p>Próg 2017/18</p>
                      <p className={"p17_18 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p17_18 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p17_18}</p>
                    </div>

                    <div className="ThresholdSection">
                      <p>Próg 2016/17</p>
                      <p className={"p16_17 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p16_17 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p16_17}</p>
                    </div>

                    <div className="ThresholdSection">
                      <p>Próg 2015/16</p>
                      <p className={"p15_16 points pointsv1 " + (this.state.yourPointsv1 >= this.state.subject.pointsv1.p15_16 ? "higherPoints" : "lowerPoints")}>{this.state.subject.pointsv1.noPointsInfo ? <span role="img" aria-label="White square">◻️</span> : this.state.subject.pointsv1.p15_16}</p>
                    </div>

                  </div>
                </div>

                <div className="WhatToMarkGeneralWrapper">

                <WhatToMark whatToMark={this.state.subject.pointsv2} key={this.state.subject.subjectName + "v1wtm"} title="Co zdawać na maturze? (v2)" />
                <WhatToMark whatToMark={this.state.subject.pointsv1} key={this.state.subject.subjectName + "v2wtm"} title="Stary sposób liczenia (v1)" />

                

                </div>
                <p className="MultiplierParagraph">Na <span className="MultiplierColor">różowo</span> zaznaczono współczynnik (mnożnik).</p>
              </div>

              

            </div>
          </Collapse>

        </div>

      </>
    )
  }

}