import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

const Items = function(props) {
    return (
    <h1>Current quantity of items in cart: { props.quantity }</h1>
    );
}

Items.propTypes = {
    quantity: PropTypes.number.isRequired
}

Items.defaultProps = {
    quantity: 0,
}

class ShoppingCart extends React.Component {
    constructor (props) {
        super (props);
    }
    state = {
        name: "Name"
    }
    render () {
        return (
            <div>
                <Items quantity={10}/>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default ShoppingCart;
// ReactDOM.render(<ShoppingCart />, document.getElementById('lesson'));