import React, { Component } from "react";
export default class CarCard extends Component {
  render() {
    const { register_number, year, model, make, description } = this.props;
    return (
      <div className="car-container">
        <h1>{make}</h1>
        <div>{year}</div>
        <img
          className="overview-img"
          src={require(`../assets/img/${model}.png`)}
          alt={model}
        />
        <p>{description}</p>
        <ul>
          <li>{register_number}</li>
          <li>{model}</li>
        </ul>
      </div>
    );
  }
}
