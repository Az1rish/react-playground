import React, { Component } from 'react';

export default class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world',                        
        }
    }

    handleClick = () => {
        this.setState({
            who: className
        }) 
    }


    render() {
        return (
            <div className="helloWorld">
                <p>Hello, {this.state.who}!</p>
                <button className="world"
                onClick={this.handleClick}>
                    World
                </button>
                <button className="friend"
                onClick={this.handleClick}>
                    Friend
                </button>
                <button className="React"
                onClick={this.handleClick}>
                    React
                </button>
            </div>
            
        )
    }
}