import React, { Component } from 'react'
import classes from './stylesheet/style.module.css'

export default class New extends Component {
    state = {
        name: ''
    }

    handleButtonclick = (event) => {
        console.log(event.target);
    }

    showText = () => {
        const text = document.getElementById('text')
        this.setState({name: text.value})
    }

    render() {
        return (
            <div className={classes.Container}>
                <button
                    className={classes.button}
                    onClick={this.showText}
                >
                    Click Me
                </button>

                <br /><br />
                
                <input
                    type="text"
                    placeholder='Input some text'
                    id='text'
                    onChange={this.changeText}
                />
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        )
    }
}
