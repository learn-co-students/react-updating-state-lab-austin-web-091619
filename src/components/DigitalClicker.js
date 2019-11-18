import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
    super()
    this.state = {
        timesClicked: 0,
        }
    }
    increment = () => {
        this.setState(prevCount => ({
            timesClicked: prevCount.timesClicked+1
        })
        )}
    render() {
        return (
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
}