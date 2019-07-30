import React, { Component } from "react";
import { getDataId } from "../api/vehiclebackend";
import CardDetailCard from "../components/CardDetailCard";
import MainLayout from "../layouts/MainLayout";
import "../assets/designs/Search.css";

export class VehicleId extends Component {
  state = {
    data: {}
  };
  componentDidMount(id) {
    if (id == null) id = 1;
    getDataId(id).then(vehicle => {
      this.setState({ data: vehicle });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="search">
          Write id from vehicle:{" "}
          <input
            className="searchTerm"
            type="text"
            placeholder="Search"
            onChange={evt => this.componentDidMount(evt.target.value)}
          />
        </div>
        <MainLayout>
          <CardDetailCard key={data.id} {...data} />
        </MainLayout>
      </div>
    );
  }
}

export default VehicleId;
