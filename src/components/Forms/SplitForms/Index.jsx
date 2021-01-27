import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Container, Row, Col } from "react-bootstrap";
import classes from "../form.module.css";

const TestForm = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>

        <input type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} className='form-control' id={props.name} />
    </div>
);

TestForm.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

class ControlledForm extends Component {
	state = {
		name: "",
		email: "",
		password: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.pass.value,
		});

		event.target.reset();
	};

	render() {
		return (
			<>
				<Container>
					<Row>
						<Col sm={7}>
							<form onSubmit={this.handleSubmit}>
								<div className='form-group'>
									<TestForm
										label='Name :'
										type='text'
										name='name'
										className='form-control'
										id='name'
										placeholder='Enter your name...'
									/>

									<TestForm
										label='Email :'
										type='email'
										name='email'
										className='form-control mt-2'
										id=''
										placeholder='Enter your email...'
									/>

									<TestForm
										label='Password :'
										type='password'
										name='pass'
										className='form-control mt-2'
										id=''
										placeholder='Enter strong password...'
									/>

									<button
										type='submit'
										className='btn btn-dark mt-3'
									>
										Submit
									</button>
								</div>
							</form>
						</Col>

						<Col sm={5}>
							<h4
								className={`${classes.Heading} text-center d-inline`}
							>
								Show Data :
							</h4>
							<div className='show-data mt-3'>
								<h6>Name Is : {this.state.name}</h6>
								<h6>Email Is : {this.state.email}</h6>
								<h6>Password Is : {this.state.password}</h6>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ControlledForm;
