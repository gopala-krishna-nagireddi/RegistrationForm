// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErr: '',
    lastNameErr: '',
    isRegistrationDone: false,
  }

  onValidateFirstName = event => {
    const firstNameInput = event.target.value

    if (firstNameInput === '') {
      this.setState({firstNameErr: 'Required'})
    } else {
      this.setState({firstName: firstNameInput, firstNameErr: ''})
    }
  }

  onValidateLastName = event => {
    const lastNameInput = event.target.value

    if (lastNameInput === '') {
      this.setState({lastNameErr: 'Required'})
    } else {
      this.setState({lastName: lastNameInput, lastNameErr: ''})
    }
  }

  firstNameInput = () => {
    const {firstNameErr} = this.state

    return (
      <div className="label-input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          id="firstName"
          type="text"
          className={`user-input ${firstNameErr}`}
          placeholder="First Name"
          onBlur={this.onValidateFirstName}
        />
        <p className="firstname-err-msg">{firstNameErr}</p>
      </div>
    )
  }

  lastNameInput = () => {
    const {lastNameErr} = this.state

    return (
      <div className="label-input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          id="lastName"
          type="text"
          className={`user-input ${lastNameErr}`}
          placeholder="Last Name"
          onBlur={this.onValidateLastName}
        />
        <p className="lastname-err-msg">{lastNameErr}</p>
      </div>
    )
  }

  onClickSubmit = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isRegistrationDone: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({firstNameErr: 'Required', lastNameErr: 'Required'})
    } else if (firstName === '') {
      this.setState({firstNameErr: 'Required'})
    } else {
      this.setState({lastNameErr: 'Required'})
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({firstName: '', lastName: '', isRegistrationDone: false})
  }

  render() {
    const {isRegistrationDone} = this.state
    return (
      <div className="app-container">
        <div className="form-container">
          <h1 className="heading">Registration Form</h1>
          {isRegistrationDone ? (
            <div className="registration-success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="success-note">Submitted Successfully</p>
              <button
                type="button"
                className="submit-btn"
                onClick={this.onSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="registration-form" onSubmit={this.onClickSubmit}>
              {this.firstNameInput()}
              {this.lastNameInput()}
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
