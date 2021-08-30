import React from 'react';

class DoggoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // The idea with this lifecyele method is to do *something else* after something specific happens
    // Real world examples: hitting a user data endpoint after auth completes, redirects, etc
    // Add an if statement here for each prop or state variable for which we want to listen for changes
    // (DON'T run logic without these if conditions! easy to create a performance issue or, worse, an infinite loop)
    if (this.state.breed === 'poodle') {
      this.props.fetchDoggos("rottweiler");
      this.setState({ breed: "Gotcha!!" });
    }

    if (prevProps.fetchDoggos !== this.props.fetchDoggos) {
      console.log("fetchDoggos function prop changed!");
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fetching dogs:", this.state.breed);
    // Call a function that hits the api to fetch dogs of this.state.breed
    this.props.fetchDoggos(this.state.breed);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.breed} onChange={(e) => this.setState({breed: e.target.value})}></input>
        <button>Fetch!</button>
      </form>
    );
  }
}

export default DoggoForm;