import React from 'react'
import Subject from './Subject'

export default class Header extends React.Component {

  state = {
    faculty: {
      facultyURL: "",
      facultyShortcut: "",
      facultyName: "",
      subjects: [{subjectName: ""}]
    }
  }

  componentDidMount() {
    this.setState({faculty: this.props.faculty})
  }
  

  render() {

    return (
      <>

        <div className="Faculty">
          <div className="FacultyInfo">
            <a className="ShortcutName" href={this.state.faculty.facultyURL} target="_blank" rel="noopener noreferrer">{this.state.faculty.shortcutName}</a>
            <p className="FullName" >{this.state.faculty.fullName}</p>
            <p className="points">Twoje punkty (v2)</p>
            <p className="points">2018/19</p>
            <p className="points">Twoje punkty (v1)</p>
            <p className="points">2017/18</p>
            <p className="points">2016/17</p>
            <p className="points">2015/16</p>
          </div>
          <div className="Subjects">
          
            {this.state.faculty.subjects.map((subject) => <Subject key={subject.subjectName} subject={subject} />)}
          </div>
          
        </div>

      </>
    )
  }

}