import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import classes from './form.module.css'

export default class Form extends Component {
    render() {
        return (
            <div className=''>
                <form action="">
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="">Name: </label>
                                <input type="text" name="name" id="" placeholder='Enter your name' className='form-control'/>
                            </div>
                        </Col>

                        <Col>
                            <div className="form-group">
                                <label htmlFor="">Name: </label>
                                <input type="text" name="name" id="" placeholder='Enter your name' className='form-control'/>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
