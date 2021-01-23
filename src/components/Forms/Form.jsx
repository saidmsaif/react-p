import React, { Component } from 'react'
import classes from './form.module.css'

export default class Form extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <h1 className='display-4 text-center'>Working With React Form</h1>
                <p className='lead text-center'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, ea?
                </p>
                <hr />
            </div>
        )
    }
}
