import React from "react";
import axios from "axios";
import Head from "next/head";
import { Row } from "react-grid-system";
import WeatherInfo from "../components/WeatherInfo";
import CurrentWeather from "../components/CurrentWeather";
import SearchCity from "../components/SearchCity";
import "../styles/styles.scss";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.apikey = "b71deb2566d82e77a5e670d0d3771d2a";
    this.apiurl = "http://api.openweathermap.org/data/2.5";
    this.state = {
      activeCity: "Kuala Lumpur",
      data: null
    };
    this.APIRequest = this.APIRequest.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  async componentDidMount() {
    await this.APIRequest(this.state.activeCity);
  }

  async APIRequest(cityName) {
    const forecastUrl = `${this.apiurl}/forecast?q=${cityName}&units=metric&appid=${this.apikey}`;
    await axios
      .get(forecastUrl)
      .then(res => {
        this.retrieveData(res.data.list);
      })
      .catch(error => {
        console.log(error);
      });

    const weatherUrl = `${this.apiurl}/weather?q=${cityName}&units=metric&appid=${this.apikey}`;
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

  /* Display forecast for 5 days according to the local system time */
  retrieveData(data) {
    let date = new Date();
    let hours = date.getHours();
    let timeslot = "";
    if (hours >= 0 && hours < 3) {
      timeslot = "00:00:00";
    } else if (hours >= 3 && hours < 6) {
      timeslot = "03:00:00";
    } else if (hours >= 6 && hours < 9) {
      timeslot = "06:00:00";
    } else if (hours >= 9 && hours < 12) {
      timeslot = "09:00:00";
    } else if (hours >= 12 && hours < 15) {
      timeslot = "12:00:00";
    } else if (hours >= 15 && hours < 18) {
      timeslot = "15:00:00";
    } else if (hours >= 18 && hours < 21) {
      timeslot = "18:00:00";
    } else if (hours >= 21) {
      timeslot = "21:00:00";
    }
    let jsonData = data.filter(data => {
      let time = data.dt_txt.split(" ")[1];
      if (time === timeslot) {
        return data;
      }
    });
    this.setState({
      data: jsonData
    });
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
    if (this.state.data) {
      cards = this.state.data.map(data => {
        return (
          <WeatherInfo
            date={this.formatDate(data.dt_txt)}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            humidity={data.main.humidity}
            description={data.weather[0].description}
            icon={data.weather[0].icon}
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
        />
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
