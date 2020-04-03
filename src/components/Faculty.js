import React from 'react'
import Subject from './Subject'

export default class Faculty extends React.Component {

  state = {
    faculty: {
      facultyURL: "",
      facultyShortcut: "",
      facultyName: "",
      subjects: [{ subjectName: "" }]
    }
  }

  componentDidMount() {
    this.setState({ faculty: this.props.faculty })
  }


  render() {

    return (
      <>

        <div className="Faculty">
          <div className="FacultyHeader">
            <a className="ShortcutName" href={this.state.faculty.facultyURL} target="_blank" rel="noopener noreferrer">{this.state.faculty.shortcutName}</a>
            <p className="FullName" >{this.state.faculty.fullName}</p>
            <p className="OnFacultyInstruction">Kliknij na wybrany kierunek aby zobaczyć szczegóły</p>
          </div>

          <div className="Subjects">
            {this.state.faculty.subjects.map((subject) => <Subject key={subject.subjectName} subject={subject} />)}
          </div>

        </div>

      </>
    )
  }

}