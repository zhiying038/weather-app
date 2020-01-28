import React from "react";
import axios from "axios";
import Head from "next/head";
import { Container, Row, Col } from "react-grid-system";
import WeatherInfo from "../components/WeatherInfo";
import CurrentWeather from "../components/CurrentWeather";
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
          lowTemp: detail.main.temp_min
        });
      })
  }

  formatDate(dateTxt) {
    let date = dateTxt.split(" ")[0].split("-");
    return `${date[2]}/${date[1]}/${date[0]}`;
  }

  formatTime(dateTxt) {
    return parseInt(dateTxt.split(" ")[1].split(":")[0]);
  }

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
    let json = data.filter(c => {
      let time = c.dt_txt.split(" ")[1];
      if (time === timeslot) {
        return c;
      }
    });
    this.setState({
      data: json
    });
  }

  render() {
    let cards = "";
    let id = 1;
    if (this.state.data) {
      cards = this.state.data.map(c => {
        return (
          <WeatherInfo
            key={id++}
            time={this.formatTime(c.dt_txt)}
            date={this.formatDate(c.dt_txt)}
            maxTemp={c.main.temp_max}
            minTemp={c.main.temp_min}
            humidity={c.main.humidity}
            description={c.weather[0].description}
            icon={c.weather[0].icon}
          />
        );
      });
    }
    return (
      <div>
        <Head>
          <title>Weather Application</title>
        </Head>
        <CurrentWeather 
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          feels_like={this.state.feels_like}
          highTemp={this.state.highTemp}
          lowTemp={this.state.lowTemp}
          humidity={this.state.humidity}
        />
        <br />
        <Container>
          <Row>
            <Col lg={12}>
              <Row>{cards}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
