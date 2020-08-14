import React from 'react'

import './../styles/global.css'

export default class Warning extends React.Component {


  render() {
    return (
      <>

        <div className="BigWarning">
          <h1>Drodzy Kandydaci!</h1>
          <p>Kalkulator oblicza wyniki porównawcze dla lat 2017 - 2019. <strong>Nie oblicza punktów dla rekrutacji 2020.</strong></p>
          <p>Kalkulator ma na celu porównanie wyników względem poprzednich lat. Nie prezentuje on punktów dla rekturacji 2020 (punkty w Systemie Rekrutacyjnym będą inne niż w niniejszym kalkulatorze).</p>
        </div>

      </>
    )
  }

}