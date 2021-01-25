import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
// import classes from './form.module.css'

export default class Form extends Component {
    state = {
        name: '',
        country: '',
        birthday: '',
        message: ''
    };
    
    handleChange = event => {
        this.setState = ({
            [event.target.name]: event.target.value
        })
    };

    render() {
        const { name, country, birthday, message } = this.state;

        return (
            <div className=''>
                <form action="">
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="">Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    id=""
                                    value={name}
                                    placeholder='Enter your name'
                                    className='form-control'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className="form-group">
                                <label htmlFor="country">Select your country : </label>
                                <select name="country" id="" className='form-control' onChange={this.handleChange} value={country}>
                                    <option>Select Your Country</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="it">Italy</option>
                                    <option value="sw">Switzerland</option>
                                    <option value="ind">India</option>
                                    <option value="mly">Malaysia</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="birthday">Birthday : </label>
                                <input type="date" name="birthday" id="" className='form-control' onChange={this.handleChange} value={birthday}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <label htmlFor="message">Your Message :</label>
                            <textarea name="message" id="" className='form-control' onChange={this.handleChange} value={message}></textarea>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="text-center mt-3">
                                <button type="button" value="Submit" className='btn btn-primary mr-2' onClick={() => {
                                    console.log(this.state);
                                }}>
                                    click me </button>
                                <input type="submit" value="Submit" className='btn btn-danger'/>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
