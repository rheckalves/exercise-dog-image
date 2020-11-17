import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import ShowDog from './ShowDog';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      dog: {}
    }

    this.fetchApi = this.fetchApi.bind(this);
  }

  async fetchApi() {
    const api = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(api);
    const result = await response.json();
    this.setState({ dog: result });
  }
  
  componentDidMount() {
  this.fetchApi();
}

  render() {
    const { message: dog } = this.state.dog;
    return (
      <div>{dog ? <ShowDog dog={dog} /> : <Loading />}</div>
    );
  }
}

export default App;
