import React from "react";
import "../styles/styles.scss";
import { Col } from "react-grid-system";

export default class WeatherInfo extends React.Component {
  render() {
    return (
      <Col lg={2} className="has-text-centered is-family-sans-serif weather-info">
        <div className="is-size-6 has-text-weight-bold">{this.props.date}</div>
        <div className="weather-icon">
          <span>
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} />
          </span>
        </div>
        <div>
          <span>{Math.round(this.props.minTemp)}&deg;</span> /{" "}
          <span>{Math.round(this.props.maxTemp)}&deg;C</span>
        </div>
        <div>Humidity: {this.props.humidity}</div>
        <div>Weather: {this.props.description}</div>
      </Col>
    );
  }
}
