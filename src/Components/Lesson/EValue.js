import React from 'react';

class Value extends React.Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    state = {
        input: ''
    }

    handleInput(event){
        this.setState({
            input: event.target.value
        });
    }

    render () {
        return (
            <div>
                <input type="text" onChange={this.handleInput} />
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default Value;