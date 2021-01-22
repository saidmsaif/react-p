import React, { Component } from 'react'
import classes from './stylesheet/style.module.css'

export default class New extends Component {
    handleButtonclick = (event) => {
        console.log(event.target);
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
                
                <input type="text"/>
            </div>
        )
    }
}
