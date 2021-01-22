import React, { Component } from 'react'
import classes from './stylesheet/style.module.css'

export default class New extends Component {
    state = {
        name: ''
    }

    handleButtonclick = (event) => {
        console.log(event.target);
    }

    showText = (event) => {
        this.setState({name: event.target.value})
    }

    handleFocus = event => {
        console.log("I'm Focused");
    }

    handleBlur = event => {
        if (!this.state.name) {
            alert('Please enter your name')
        }
        console.log('I am blur event');
    }

    render() {
        return (
            <div className={classes.Container}>
                <button
                    className={classes.button}
                    onClick={this.handleButtonclick}
                >
                    Click Me
                </button>

                <br /><br />
                
                <input
                    type="text"
                    placeholder='Input some text'
                    onChange={this.showText}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        )
    }
}
