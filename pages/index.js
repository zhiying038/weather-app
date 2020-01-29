import React from "react";
import axios from "axios";
import Head from "next/head";
import { Row } from "react-grid-system";

import WeatherInfo from "../components/WeatherInfo";
import CurrentWeather from "../components/CurrentWeather";
import SearchCity from "../components/SearchCity";
import UnitToggle from "../components/UnitToggle";

import "../styles/styles.scss";

const WEATHER_API_KEY = "b71deb2566d82e77a5e670d0d3771d2a";
const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: "Kuala Lumpur",
      unit: "metric",
      forecast: null
    };
    this.APIRequest = this.APIRequest.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.toggleUnit = this.toggleUnit.bind(this);
  }

  // Mount original city
  async componentDidMount() {
    await this.APIRequest(this.state.activeCity);
  }

  // OpenWeatherMap API request
  async APIRequest(cityName) {
    const forecastUrl = `${WEATHER_API_URL}/forecast?q=${cityName}&units=${this.state.unit}&appid=${WEATHER_API_KEY}`;
    await axios
      .get(forecastUrl)
      .then(res => {
        this.retrieveData(res.data.list);
      })
      .catch(error => {
        console.log(error);
      });

    const weatherUrl = `${WEATHER_API_URL}/weather?q=${cityName}&units=${this.state.unit}&appid=${WEATHER_API_KEY}`;
    axios.get(weatherUrl).then(res => {
      const detail = res.data;
      this.setState({
        city: detail.name,
        temperature: detail.main.temp,
        description: detail.weather[0].description,
        feels_like: detail.main.feels_like,
        humidity: detail.main.humidity,
        highTemp: detail.main.temp_max,
        lowTemp: detail.main.temp_min,
        country: detail.sys.country,
        windspeed: detail.wind.speed
      });
    });
  }

  /* Display date in the format of DD/MM/YY */
  formatDate(dateData) {
    let date = dateData.split(" ")[0].split("-");
    return `${date[2]}/${date[1]}/${date[0]}`;
  }

  /* Display weather forecast for the next five days. To simplify it, only the weather at 12 noon
     will be displayed. */
  retrieveData(data) {
    const forecastData = data.filter(reading =>
      reading.dt_txt.includes("12:00:00")
    );
    this.setState({
      forecast: forecastData
    });
  }

  // Change Celsius to Fahrenheit and vice versa
  toggleUnit() {
    if (this.state.unit === "metric") {
      this.setState({
        unit: "imperial"
      });
    } else {
      this.setState({
        unit: "metric"
      });
    }
  }

  submitHandler(input) {
    input.preventDefault();
    this.APIRequest(this.state.activeCity);
  }

  changeHandler(input) {
    input.preventDefault();
    this.setState({
      activeCity: input.target.value
    });
  }

  render() {
    let cards = "";
    let id = 1;
    if (this.state.forecast) {
      cards = this.state.forecast.map(data => {
        return (
          <WeatherInfo
            key={id++}
            date={this.formatDate(data.dt_txt)}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            humidity={data.main.humidity}
            description={data.weather[0].description}
            icon={data.weather[0].icon}
            unit={this.state.unit}
          />
        );
      });
    }
    return (
      <div>
        <Head>
          <title>Weather Application</title>
        </Head>
        <SearchCity
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          activeCity={this.state.activeCity}
        />
        <CurrentWeather
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          feels_like={this.state.feels_like}
          highTemp={this.state.highTemp}
          lowTemp={this.state.lowTemp}
          humidity={this.state.humidity}
          country={this.state.country}
          windspeed={this.state.windspeed}
          unit={this.state.unit}
        />
        <UnitToggle toggleUnit={this.toggleUnit} unit={this.state.unit} />
        <br />
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column tile is-ancestor is-centered">
                <div className="tile">
                  <div className="tile is-child">
                    <Row>{cards}</Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
