import React from 'react';
import axios from 'axios';
import DoggoForm from './components/DoggoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: [],
      title: "Hello Doggos!"
    }
  }

  componentDidMount() {
    console.log("Component mounted");
    axios.get("https://dog.ceo/api/breed/hound/images")
      .then(res => this.setState({
        ...this.state,
        doggos: res.data.message
      }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    if (prevState.doggos !== this.state.doggos) {
      console.log("doggos changed!! omgomg");
    }

    if (prevState.title !== this.state.title) {
      console.log("title updated!");
    }

    // Other conditions here, each for a specific state variable or prop
    // Multiple conditions here is the equivalent of multiple useEffect calls. Or if the logic in each is the same, it's equivalent to having one useEffect call with multiple props/state vars in the dependency array
  }

  fetchDoggos = (newBreed) => {
    axios.get(`https://dog.ceo/api/breed/${newBreed}/images`)
      .then(res => this.setState({
        ...this.state,
        doggos: res.data.message
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <DoggoForm fetchDoggos={this.fetchDoggos} />
        {this.state.doggos.map(doggo => {
          return <img className="doggo" key={doggo} src={doggo} />
        })}
      </div>
    );
  }
}

export default App;