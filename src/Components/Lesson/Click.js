import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
      this.example = this.example.bind(this);
    }
    handleClick() {
      // change code below this line
      this.setState({
        name: 'React Rocks!'
      });
      // change code above this line
    }
    example(){
        this.setState({
            name: 'OMG'
        });
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>React Rocks!</button>
          <button onClick={this.example}>Example</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
};

export default MyComponent;