import React from 'react'
import { Link } from "react-scroll";

import './../styles/InputMarks.css'
import './../styles/Corners.css'
import Header from './Header'
import Quote from './Quote';

export default class InputMarks extends React.Component {

  state = {
    yourPoints: JSON.parse(localStorage.getItem('yourPoints'))
  }

  handleChange(event) {

    let regex = new RegExp("(^[0-1][0][0]$)|(^[0-9][0-9]$)|(^[0-9]$)", "g")

    if (regex.test(event.target.value)) {

      let newState = this.state.yourPoints
      newState[event.target.name] = event.target.value
      this.setState({newState})
      localStorage.setItem('yourPoints', JSON.stringify(newState))


    } else {
      event.target.value = event.target.value.substring(0,event.target.value.length-1)
    }

  }

  handleSubmit(e) {
    e.preventDefault()
  }

  componentDidMount() {
    this.fillInForm();
  }

  fillInForm() {
    let inputs = document.querySelectorAll("form input[type=tel]")
    let local = JSON.parse(localStorage.yourPoints)

    for(let input of inputs) {
      if (local[input.name] > 0) {
        input.value = local[input.name]
      } else {
        //console.log(local[input.name] + " " + input.name)
      }
    }
  }

  render() {
    return (
      <>

        <Header key="MainHeader" />

        <div className="InputMarksGeneralWrapper">

          <Quote />

          <form>
            <div className="InputMarksCardBorders">
              <div className="CornerTopLeft"></div>
              <div className="CornerTopRight"></div>
              <div className="CornerBottomLeft"></div>
              <div className="CornerBottomRight"></div>

              <div className="Compatibility">
                <p>*Kompatybilność z letnią rekrutacją 2020 (dane według Informatora PRz).</p>
                <p></p>
              </div>

              <div className="InputMarksCard">
                <h1>Wprowadź swoje wyniki aby obliczyć wskaźnik rekrutacyjny</h1>
                <div className="Row BasicSectionWrapper">
                <div className="InputBasicSection">
                  <div className="InputHeadingSection">
                    <h2>Przedmioty obowiązkowe</h2>
                    <h3 className="LevelInfo">Poziom podstawowy</h3>
                  </div>
                  <div className="InputsRow">

                    <div className="SingleInput">
                      <label htmlFor="B_PL">Język polski</label>
                      <input type="tel" name="B_PL" autoFocus onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="B_FL">Język obcy nowożytny</label>
                      <input type="tel" name="B_FL" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="B_PL">Matematyka</label>
                      <input type="tel" name="B_MAT" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                  </div>
                </div>

                <div className="InputQuickInfo">
                  <div className="InputHeadingSection">
                    <h2>Informacja</h2>
                  </div>
                  <div className="InputQuickInfoContent">
                    Poniżej zobaczysz progi punktowe z poprzednich rekrutacji, a obok swoje punkty według nowego sposobu liczenia (v2) oraz starego sposobu liczenia (v1).
                    Jeśli Twoje punkty są większe lub równe od progu, próg zaświeci się na <span className="higherPoints">zielono</span>. Jeśli Twoje punkty są mniejsze, próg będzie <span className="lowerPoints">czerwony</span>
                  </div>
                </div>
                </div>

                <div className="InputExtendedSection">
                  <div className="InputHeadingSection">
                    <h2>Przedmioty dodatkowe</h2>
                    <h3 className="LevelInfo">Poziom rozszerzony</h3>
                  </div>

                  <div className="InputsRow">

                    <div className="SingleInput">
                      <label htmlFor="E_BIO">Biologia</label>
                      <input type="tel" name="E_BIO" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_CH">Chemia</label>
                      <input type="tel" name="E_CH" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_PHI">Filozofia</label>
                      <input type="tel" name="E_PHI" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_PHY">Fizyka</label>
                      <input type="tel" name="E_PHY" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_GEO">Geografia</label>
                      <input type="tel" name="E_GEO" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_HIS">Historia / Historia sztuki</label>
                      <input type="tel" name="E_HIS" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_IT">Informatyka</label>
                      <input type="tel" name="E_IT" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_FL">Język obcy nowożytny</label>
                      <input type="tel" name="E_FL" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_PL">Język polski</label>
                      <input type="tel" name="E_PL" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_MAT">Matematyka</label>
                      <input type="tel" name="E_MAT" onKeyUp={this.handleChange.bind(this)} />
                    </div>

                    <div className="SingleInput">
                      <label htmlFor="E_CIV">WOS</label>
                      <input type="tel" name="E_CIV" onKeyUp={this.handleChange.bind(this)} />
                    </div>


                  </div>
                </div>

              </div>


              <Link className="AnchorGoToMarks" to="Summary" smooth={true} duration={500} offset={-60}><input type="submit" value="Przejdź do podsumowania" onClick={(e) => this.handleSubmit(e)} /></Link>
            </div>

          </form>

        </div>
      </>
    )
  }

}