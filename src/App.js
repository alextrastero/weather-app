import './App.css'

import { h, Component } from 'preact'

import Weather from './components/weather';
import Form from './components/form';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { city: null }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(evt) {
    evt.preventDefault();

    const formElements = Array.prototype.slice.call(evt.target.elements)
    const city = formElements.filter(el => el.name === 'city')[0].value || ''
    this.setState({ city })
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="city" />
      </form>
    )
  }

  render() {
    const { city } = this.state
    return city ? <Weather city={city} /> : <Form handleSubmit={this.handleSubmit} />
  }
}
