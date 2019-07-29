import React, { Component } from "react";
import { getData } from "../api/vehiclebackend";
import MainLayout from "../layouts/MainLayout";
import CarCard from "../components/CarCard";

export class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    getData(
      res =>
        this.setState({
          data: res.data
        }),
      err => {
        alert(err);
      }
    );
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <MainLayout>
          {data.map(vehicle => (
            <CarCard key={vehicle.id} {...vehicle} />
          ))}
        </MainLayout>
      </div>
    );
  }
}

export default Home;
