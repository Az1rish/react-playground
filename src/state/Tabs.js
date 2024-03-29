import React, { Component } from 'react';

export default class Tabs extends Component {
    static defaultProps = {
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };

   handleButtonClick(index) {
        this.setState({
            currentTabIndex: index
        })
        console.log('button clicked!', { index })
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
                {/* only show content when the tabs array has length*/}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}

