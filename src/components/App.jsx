import React, { Component } from 'react'
import classes from "./App.module.css";
import { Col, Container, Row } from 'react-bootstrap'
import { newsCategory } from '../news'

class App extends Component {
	state = {
		searchTerm: ""
	}

	onChangeHandler = e => {
		// TODO: Implement Later
		this.setState({ searchTerm: e.target.value})
	}

	onKeyPressHandler = e => {
		// TODO: Implement Later

	}

    render() {
			const {category} = this.props
        return (
			<>
				<div
					className={`${classes.Jumbo_BG} jumbotron jumbotron-fluid text-light text-left`}>
					<Container>
						<h1 className={`${classes.pageHeading} display-4 d-inline`}>
							Simple Blog
						</h1>
						<p className='w-100 mt-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Optio impedit, dolore earum numquam labore
							exercitationem excepturi. Magnam commodi quos mollitia
							reiciendis tempora? Doloribus, tempore nam. Ipsum magnam
							cum id dolorum?
						</p>
					</Container>
				</div>

				{/* Main Container Area */}

				<Container>
					<Row>
						<Col className='border p-5'>
							<input type="search"
							className="form-control mb-2"
								placeholder="Type anything and press enter..." 
								value={this.state.searchTerm}
								onChange={this.onChangeHandler}
								onKeyPress={this.onKeyPressHandler}
							/>
							{newsCategory && Object.keys(newsCategory).map(item => {
								if(category === newsCategory[item]) {
									return (
										<button className='btn btn-sm mr-2 mb-2 btn-warning'>
											{`#${newsCategory[item]}`}
										</button>
									)
								} else {
									return (
										<button className='btn btn-sm mr-2 mb-2 btn-light'>
											{`#${newsCategory[item]}`}
										</button>
									)
								}
							})}
						</Col>
					</Row>
				</Container>
				
				{/* Main Container Area */}

				<div className={`${classes.copyright} copyright mt-4`}>
					<Container className='text-light'>
						<Row>
							<Col>
								<p className='mt-3'>
									Copyright © Saifullah Saif | All Right
									Reserved
								</p>
							</Col>
							<Col></Col>
						</Row>
					</Container>
				</div>
			</>
		);
    }
}

export default App