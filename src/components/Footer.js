import React from 'react'

import './../styles/Footer.css'

export default class Footer extends React.Component {

  render() {
    return (
      <>
        <footer>
          <p>&copy; 2018-2020 by <a href="http://vabes.pl">Marcin Wielgos, vabes.pl</a></p>
          <p>Wszelkie prawa zastrzeżone. Kopiowanie bez pozwolenia zabronione.</p>
        </footer>
      </>
    )
  }

}