import React, { Component } from 'react'
import classes from './stylesheet/style.module.css'

export default class New extends Component {
    handleButtonclick = (event) => {
        console.log(event.target);
    }
    
    render() {
        return (
            <div>
                <button
                    className={classes.button}
                    onClick={this.handleButtonclick}
                >
                    Click Me
                </button>
            </div>
        )
    }
}
