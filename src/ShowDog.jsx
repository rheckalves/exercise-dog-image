import React, { Component } from 'react';

class ShowDog extends Component {
    render() {
        const { message: dog } = this.props.dog;
        return (
            <img src={dog} alt="dog" />
        )
    }
}

export default ShowDog;