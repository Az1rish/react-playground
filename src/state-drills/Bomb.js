import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)    
    }

    render() {
        let word;
        if(this.state.count===8) {
            word = <p>BOOM!!!!</p>
            clearInterval(this.interval) 
        } else if (this.state.count%2===0) {
            word = <p>tick</p>
        } else {
            word = <p>tock</p>
        }
        console.log(this.state.count);
        return (
            <div>
                {word}
            </div>
        )
    }
}