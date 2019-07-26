import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/")
      .then(response => this.setState({ data: response.data }));
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
                src={require(`./assets/img/${data.model}.png`)}
                alt={data.model}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
