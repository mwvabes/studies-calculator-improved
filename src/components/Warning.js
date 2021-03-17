import React from 'react'

import './../styles/global.css'

export default class Warning extends React.Component {


  render() {
    return (
      <>

        <div className="BigWarning">
          <h1>Drodzy Kandydaci!</h1>
          <p>Kalkulator oblicza wyniki porównawcze dla lat 2017 - 2019. <strong>Nie oblicza punktów dla rekrutacji przeprowadzonych w roku 2020 lub 2021.</strong></p>
          <p>Kalkulator ma na celu porównanie wyników względem poprzednich lat.</p>
          <p>Nie prezentuje on punktów dla rekrutacji od roku 2020 (punkty w Systemie Rekrutacyjnym będą inne niż w niniejszym Kalkulatorze).</p>
        </div>

      </>
    )
  }

}