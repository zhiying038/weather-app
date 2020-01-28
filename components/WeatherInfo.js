import React from "react";
import { Col } from "react-grid-system";
import "../styles/styles.scss";

export default class WeatherInfo extends React.Component {
  render() {
    return (
      <Col
        lg={2}
        className="has-text-centered is-family-sans-serif weather-info"
      >
        <div className="is-size-6 has-text-weight-bold">{this.props.date}</div>
        <div className="weather-icon">
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            />
          </span>
        </div>
        <div>
          <span>{Math.round(this.props.minTemp)}&deg;</span> /{" "}
          <span>{Math.round(this.props.maxTemp)}&deg;C</span>
        </div>
        <div>
          <h5 className="has-text-weight-semibold">
            Humidity:
            <span className="is-normal">{this.props.humidity}</span>
          </h5>
        </div>
        <div>
          <h5 className="has-text-weight-semibold">Weather: </h5>
          <p className="is-capitalized">{this.props.description}</p>
        </div>
      </Col>
    );
  }
}
