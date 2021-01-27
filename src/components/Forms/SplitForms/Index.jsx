import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../form.module.css";

class ControlledForm extends Component {
	state = {
		name: "",
		email: "",
		password: "",
	};

	handleSubmit = (event) => {
		
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
									<input
										type='text'
										name='name'
										className='form-control'
										id=''
										placeholder='Enter your name...'
									/>

									<input
										type='email'
										name='email'
										className='form-control mt-2'
										id=''
										placeholder='Enter your email...'
									/>

									<input
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
