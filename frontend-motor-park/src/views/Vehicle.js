import React, { Component } from "react";
import { getDataId } from "../api/vehiclebackend";
import CarCard from "../components/CarCard";

const massageVehicleData = vehicle => ({
  register_number: vehicle.register_number,
  year: vehicle.year,
  model: vehicle.model,
  make: vehicle.make
});

export class Vehicle extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      getDataId(this.props.match.params.id).then(vehicle => {
        const massageVehicle = massageVehicleData(vehicle);
        this.setState({ data: massageVehicle });
      });
    }
  }
  render() {
    const { data } = this.state;
    return <CarCard key={data.id} {...data} />;
  }
}

export default Vehicle;
