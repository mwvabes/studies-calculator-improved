import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import InputMarks from './components/InputMarks';

import './styles/reset.css'
import './styles/global.css'
import Summary from './components/Summary';
import Instruction from './components/Instruction';
import Footer from './components/Footer';
import Quote from './components/Quote';

export default class App extends React.Component {

  render() {

    if (localStorage.getItem('yourPoints') === null) {

      let data = {
        B_PL: 0,
        B_FL: 0,
        B_MAT: 0,
        E_BIO: 0,
        E_CH: 0,
        E_PHI: 0,
        E_PHY: 0,
        E_GEO: 0,
        E_HIS: 0,
        E_IT: 0,
        E_FL: 0,
        E_PL: 0,
        E_MAT: 0,
        E_CIV: 0
      }
      localStorage.setItem('yourPoints', JSON.stringify(data))
    }

    return (
      <div className="App">
        <BrowserRouter>


          <Route exact path="/" >
            <InputMarks key="InputMarks" />
            <Summary key="Summary" />
            <Instruction />
            <Footer />
          </Route>

        </BrowserRouter>
      </div>
    )
  }
}
