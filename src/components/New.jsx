import React, { Component } from 'react'
import classes from './stylesheet/style.module.css'

export default class New extends Component {
    render() {
        return (
            <div>
                <button className={classes.button}>Click Me</button>
            </div>
        )
    }
}
