import React, { Component } from 'react';

export default class Accordion extends Component {
    static defaultProps = {
        sections: [],
    };
    
    state = {
        currentSection: 0,
    }

    handleButtonClick(index) {
        this.setState({
            currentSection: index,
        })
    }

    renderSection() {
        const currentSection = this.props.sections[this.state.currentSection]
        return (
            <p className="content">
                {currentSection.content}
            </p>
        )
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title} 
                </button>   
                </li>
        ))
        
    }
    
    render() {
        
        return (
            <ul>
                {this.renderButtons()}
                {!!this.props.sections.length &&this.renderSection()}
            </ul>
        )
    }
}