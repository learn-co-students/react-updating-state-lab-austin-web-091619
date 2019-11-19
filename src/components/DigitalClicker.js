import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }


    handleClick = event => {
        let oldState = this.state.timesClicked
        this.setState({timesClicked: oldState + 1})
    }


    render() {
        return (
        <button onClick={this.handleClick}>{`${this.state.timesClicked}`}</button>
        );
    }
}

export default DigitalClicker;