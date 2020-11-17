import React, { Component } from 'react';

class ShowDog extends Component {
    render() {
        return (
            <img src={this.props.dog} alt="dog" />
        )
    }
}

export default ShowDog;