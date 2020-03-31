import React from 'react'
import data from './../api/politechnika-rzeszowska.json'

import Faculty from './Faculty'

import './../styles/Summary.css'

export default class Summary extends React.Component {

  render() {

    return(
      <>
        <div className="Summary">
          <h1>Podsumowanie</h1>
          {data.map((faculty) => <Faculty key={faculty.shortcutName} faculty={faculty} />)}
        </div>
        
      </>
    )
  }

}