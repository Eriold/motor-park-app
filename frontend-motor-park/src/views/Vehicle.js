import React, { Component } from "react";
import { getDataId } from "../api/vehiclebackend";

export class Vehicle extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      getDataId(
        id,
        res =>
          this.setState({
            data: res.data
          }),
        err => {
          alert(err);
        }
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Test parking</h1>
        <ul>
          {this.state.data.map(data => (
            <li key={data.id}>
              <b>Modelo: </b> {data.model} <b> Marca: </b> {data.make}{" "}
              <b>Año: </b>
              {data.year}
              <img
                src={require(`../assets/img/${data.model}.png`)}
                alt={data.model}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Vehicle;
