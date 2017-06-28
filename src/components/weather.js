import '../Weather.css'

import { h, Component } from 'preact'

const API_KEY = '7f14398a8758af8b4c38b6e1d0336449';

export default class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {"coord":{"lon":-3.48,"lat":37.84},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":298.653,"pressure":947.98,"humidity":32,"temp_min":298.653,"temp_max":298.653,"sea_level":1026.77,"grnd_level":947.98},"wind":{"speed":3.71,"deg":269.504},"clouds":{"all":0},"dt":1498652177,"sys":{"message":0.0081,"country":"ES","sunrise":1498625667,"sunset":1498678806},"id":2516317,"name":"Jimena","cod":200}
    }

    this.handleWeatherApi = this.handleWeatherApi.bind(this)
  }

  componentWillMount() {
    if (this.props.city) {
      // this.fetchWeather()
    }
  }

  handleWeatherApi(data) {
    this.setState({ data });
  }

  fetchWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${API_KEY}`;

    fetch(url).then(res => res.json()
      .then(data => { this.handleWeatherApi(data) })
      .catch(err => { console.error(err) })
    )
  }

  render() {
    const { data } = this.state
    if (!data) return;

    return (
      <ul>
        {
          data.weather.map(z =>
            Object.keys(z).map(k => <li>{`${k}: ${z[k]}`}</li>)
          )
        }
      </ul>
    )
  }
}
