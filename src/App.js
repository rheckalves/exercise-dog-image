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
      specie: undefined,
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const api = "https://dog.ceo/api/breeds/image/random";
      const response = await fetch(api);
      const result = await response.json();
      const { message } = result;
      const params = message.match(/.*\/(.*)\/(.*)$/);
      this.setState({
        dog: result,
        specie: params[1],
        loading: false,
      });
      message.includes('terrier') ? alert('terriers not allowed!') : alert(this.state.specie);
    });
  }

  componentDidMount() {
    this.fetchApi();
  }

  componentDidUpdate() {
    if (this.state.dog) {
      const { message } = this.state.dog;
      localStorage.setItem('lastUrl', message);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.specie) {
      const { specie } = nextState;
      if (specie.includes('terrier')) return false;
      return true;
    }
    return false;
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Api">
        {loading ? <Loading /> : <ShowDog dog={this.state.dog} race={this.state.specie} />}
        <button onClick={this.fetchApi}>Outro cão!</button>
      </div>
    );
  }
}

export default App;
