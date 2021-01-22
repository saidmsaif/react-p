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
                />
                <h3>Welcome, {this.state.name}</h3>
            </div>
        )
    }
}
