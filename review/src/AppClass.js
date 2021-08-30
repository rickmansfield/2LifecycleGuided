import React from "react";

class Person extends React.Component {
  componentDidUpdate() {
    console.log('Person: Component Updated');
  }

  render() {
    console.log('Person: Render Component');
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
      </div>
    )
  }
}

class AppClass extends React.Component {
  constructor() {
    console.log('AppClass: Setup State');
    super();
    this.state = {
      name: "Warren"
    };
  }
//now we just use
//state = {name: "Warren"}
//to accomplish the same thing. 

//this block of code is the equivalent of useEffect() in a Functional Component. 
  componentDidMount() {
    console.log('AppClass: Component Mounted');
  }

  componentDidUpdate() {
    //could be written componentDidUpdate (prevProps, prevState)
      //console.log('old props: ', prevProps);
      //console.log('new props: ', this.props);
      //console.log('old state: ', prevState);
      //console.log('new state: ', this.state);
    console.log('AppClass: Component Updated');
  }

  handleNameButtonClick = (e) => {
    console.log('AppClass: Handle Click');
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  
  render() {
    console.log('AppClass: Render Component');
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
