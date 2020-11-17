import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import ShowDog from './ShowDog';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      dog: undefined,
      loading: true,
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const api = "https://dog.ceo/api/breeds/image/random";
      const response = await fetch(api);
      const result = await response.json();
      this.setState({
        dog: result,
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Api">
        {loading ? <Loading /> : <ShowDog dog={this.state.dog} />}
        <button onClick={this.fetchApi}>Outro cão!</button>
      </div>
    );
  }
}

export default App;
