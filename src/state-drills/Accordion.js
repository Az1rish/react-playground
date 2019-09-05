import React, { Component } from 'react';

export default class Accordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSectionIndex: null,
        };
    }

    static defaultProps = {
        sections: [],
    };
    
    handleButtonClick = (index) => {
        this.setState({
            activeSectionIndex: index,
        }) 
        console.log({index},' has been clicked')
    }

    renderSections(section, index, activeSectionIndex) {
        return (
            <li className='AccordionItem' key={index}>
                <button type='button' onClick={() => this.handleButtonClick(index)}>
                    {section.title} 
                </button> 
                {(activeSectionIndex === index) && <p>{section.content}</p>}  
            </li>
        )   
    }
    
    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, index) => this.renderSections(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }
}