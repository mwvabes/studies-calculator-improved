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

    const navItems = document.querySelectorAll("nav > ul > li");
    // hiding menu after click item
    for (const item of navItems) {
      item.addEventListener("click", function () {
        document.getElementById("navToggle").checked = false;
      });
    }

  }

  render() {
    return (
      <>

        <header className={"Header " + (this.state.scrollLevel > 0 ? "HeaderBackground" : "")}>
          <p className="HeaderInfo">Autor: <a href="http://vabes.pl">Marcin Wielgos</a></p>
          <nav>
            <input type="checkbox" id="navToggle" className="navToggle dsNone" />
            <div className="navToggleContainer">
              <label htmlFor="navToggle" className="navToggleLabel"><span></span></label>
            </div>
            <ul>
              <li><Link to="InputMarksGeneralWrapper" smooth={true} duration={500} offset={-60}>Twoja matura</Link></li>
              <li><Link to="Summary" smooth={true} duration={500} offset={-60}>Podsumowanie</Link></li>
              <li><Link to="ReportIssue" smooth={true} duration={500} offset={-60}>Zgłoś błąd</Link></li>
              <li><Link to="Instruction" smooth={true} duration={500} offset={-60}>Instrukcja</Link></li>
            </ul>
          </nav>

        </header>

      </>
    )
  }

}