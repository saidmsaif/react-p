import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { newsCategory } from '../../news'

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
			</>
		);
    }
}

export default App