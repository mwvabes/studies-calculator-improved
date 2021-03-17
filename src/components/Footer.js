import React from 'react'

import './../styles/Footer.css'

export default class Footer extends React.Component {

  render() {
    return (
      <>
        <footer>
          <p>&copy; 2018-2021 by <a href="https://wielgos.me">Marcin Wielgos, https://wielgos.me</a></p>
          <p>Wszelkie prawa zastrzeżone. Kopiowanie bez pozwolenia zabronione.</p>
        </footer>
      </>
    )
  }

}