import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
// import classes from './form.module.css'

export default class Form extends Component {
	state = {
		name: "",
		country: "",
		birthday: "",
		message: "",
		gender: "",
		agree: false,
		skills: [],
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleCheckBox = (event) => {
		this.setState({
			agree: event.target.checked,
		});
	};

	handleChangeSkills = (event) => {
		if (event.target.checked) {
			this.setState({
				skills: [...this.state.skills, event.target.value]
			})
		} else {
			const skills = this.state.skills.filter(skill => skill !== event.target.value)
			this.setState({skills})
		}
	}

	render() {
		const { name, country, birthday, message, agree, skills } = this.state;

		return (
			<div className=''>
				<form action=''>
					<Row>
						<Col>
							<div className='form-group'>
								<label htmlFor=''>Name: </label>
								<input
									type='text'
									name='name'
									id=''
									value={name}
									placeholder='Enter your name'
									className='form-control'
									onChange={this.handleChange}
								/>
							</div>
						</Col>

						<Col>
							<div className='form-group'>
								<label htmlFor='country'>
									Select your country :{" "}
								</label>
								<select
									name='country'
									id=''
									className='form-control'
									onChange={this.handleChange}
									value={country}
								>
									<option>Select Your Country</option>
									<option value='bd'>Bangladesh</option>
									<option value='it'>Italy</option>
									<option value='sw'>Switzerland</option>
									<option value='ind'>India</option>
									<option value='mly'>Malaysia</option>
								</select>
							</div>
						</Col>
					</Row>

					<Row>
						<Col>
							<div className='form-group'>
								<label htmlFor='birthday'>Birthday : </label>
								<input
									type='date'
									name='birthday'
									id=''
									className='form-control'
									onChange={this.handleChange}
									value={birthday}
								/>
							</div>
						</Col>
					</Row>

					<Row>
						<Col>
							<label htmlFor='gender' className='d-block'>
								Gender :
							</label>
							<div className='form-check form-check-inline'>
								<input
									type='radio'
									name='gender'
									value='Male'
									id=''
									className='form-check-input'
									onChange={this.handleChange}
								/>
								<label className='form-check-label mr-3'>
									Male
								</label>
								<input
									type='radio'
									name='gender'
									value='Female'
									id=''
									className='form-check-input'
									onChange={this.handleChange}
								/>
								<label className='form-check-label'>
									Female
								</label>
							</div>
						</Col>

						<Col>
							<label className='d-block'>Skills :</label>
							<div className='form-check form-check-inline'>
								<input
									type='checkbox'
									className='form-check-input'
									name=''
									value='Web Design'
									id='webdesign'
									checked={skills.includes("Web Design")}
									onChange={this.handleChangeSkills}
								/>
								<label for='webdesign'>Web Design</label>
							</div>

							<div className='form-check form-check-inline'>
								<input
									type='checkbox'
									className='form-check-input'
									name=''
									id='js'
									value='JavaScript'
									checked={skills.includes("JavaScript")}
									onChange={this.handleChangeSkills}
								/>
								<label for='js'>JavaScript</label>
							</div>

							<div className='form-check form-check-inline'>
								<input
									type='checkbox'
									className='form-check-input'
									name=''
									id='php'
									value='PHP'
									checked={skills.includes("PHP")}
									onChange={this.handleChangeSkills}
								/>
								<label for='php'>php</label>
							</div>

							<div className='form-check form-check-inline'>
								<input
									type='checkbox'
									className='form-check-input'
									name=''
									id='react'
									value='React JS'
									checked={skills.includes("React JS")}
									onChange={this.handleChangeSkills}
								/>
								<label for='react'>React JS</label>
							</div>
						</Col>
					</Row>

					<Row>
						<Col>
							<label htmlFor='message'>Your Message :</label>
							<textarea
								name='message'
								id=''
								className='form-control'
								onChange={this.handleChange}
								value={message}
							></textarea>
						</Col>
					</Row>

					<Row>
						<Col>
							<div className='form-check pl-0'>
								<input
									type='checkbox'
									className='mr-3'
									name='agree'
									onChange={this.handleCheckBox}
									checked={agree}
									id=''
								/>
								I Agree with terms and conditions
							</div>
						</Col>
					</Row>

					<Row>
						<Col>
							<div className='text-center mt-3'>
								<button
									type='button'
									value='Submit'
									className='btn btn-primary mr-2'
									onClick={() => {
										console.log(this.state);
									}}
								>
									click me{" "}
								</button>
								<input
									type='submit'
									value='Submit'
									className='btn btn-danger'
								/>
							</div>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}
