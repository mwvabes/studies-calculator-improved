import React from 'react'
import { Link } from "react-scroll";

import './../styles/Header.css'

export default class Header extends React.Component {

  state = {
    scrollLevel: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY;
      if (isTop !== this.state.scrollLevel) {
          this.setState({ scrollLevel: isTop })
      }
    });
  }

  render() {
    return (
      <>

        <header className={"Header " + (this.state.scrollLevel > 0 ? "HeaderBackground" : "")}>
          <p className="cookiesInfo">Strona korzysta z cookies</p>
          <nav>
            <ul>
              <li><Link to="InputMarksGeneralWrapper" smooth={true} duration={500} offset={-60}>Twoja matura</Link></li>
              <li><Link to="Summary" smooth={true} duration={500} offset={-60}>Podsumowanie</Link></li>
              <li><Link to="Instruction" smooth={true} duration={500} offset={-60}>Instrukcja</Link></li>
            </ul>
          </nav>
        </header>

      </>
    )
  }

}