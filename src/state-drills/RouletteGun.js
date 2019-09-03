import React, { Component } from 'react';

export default class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        };
    }

    static defaultProps = {
        bulletInChamber: 8
    };

    handleButton = () => {
        this.setState({
            spinningTheChamber: true
        })

        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random()*8),
                spinningTheChamber: false
            })
            console.log(this.state.chamber);
        }, 2000)
        
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        let action;
        if(this.state.spinningTheChamber===true) {
            action = <p>spinning the chamber and pulling the trigger!....</p>
        } else if(this.state.chamber===this.props.bulletInChamber) {
            action = <p>BANG!!!!</p>
        } else {
            action = <p>you're safe!!</p>
        }
        return (
            <div>
                {action}
                <button
                    onClick={this.handleButton}>
                        Pull the trigger!
                </button>
            </div>
        )
    }
}