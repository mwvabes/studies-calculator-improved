import React from 'react'

import './../styles/global.css'

export default class Warning extends React.Component {


  render() {
    return (
      <>

        <div className="BigWarning">
          <h1>Uwaga!</h1>
          <p>Zbliża się okres letniej rekrutacji 2020. Zostanie w niej wprowadzony nowy sposób liczenia punktów (opisany na stronie PRz).</p>
          <p>Niniejszy Kalkulator działa poprawnie względem poprzednich zasad rekrutacji, ale nie oblicza punktów dla nowego sposobu. Dlatego więc w systemie rekrutacyjnym zobaczycie inny wynik niż ten prezentowany przez Kalkulator.</p>
          <p>Kalkulator ma na celu porównanie wyników z progami z poprzednich lat.</p>
        </div>

      </>
    )
  }

}