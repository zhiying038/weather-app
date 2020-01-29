import React from "react";
import moment from "moment";
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
        <h5>{moment(this.props.day).format("dddd")}</h5>
        <div className="weather-icon">
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            />
          </span>
        </div>
        <div>
          <span>
            {this.props.unit === "metric"
              ? Math.round(this.props.maxTemp) + "°C"
              : Math.round((this.props.maxTemp * 9) / 5 + 32) + "°F"}
          </span>{" "}
          / <span>{this.props.unit === "metric"
              ? Math.round(this.props.minTemp) + "°C"
              : Math.round((this.props.minTemp * 9) / 5 + 32) + "°F"}</span>
        </div>
        <div>
          <h5 className="has-text-weight-semibold">
            Humidity:
            <span className="is-normal">{this.props.humidity}%</span>
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
