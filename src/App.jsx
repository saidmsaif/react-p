import React, { Component } from 'react'
import classes from "./App.module.css";
import { Col, Container, Row } from 'react-bootstrap'
import Blog from './components/blog/blog'
import { newsCategory } from './news'

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
        return (
			<>
        {
          // Header Area Start
        }
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

        {
          // Header Area End
        }

				{/* Main Container Area */}

				<Blog category={newsCategory.business} />
				
				{/* Main Container Area */}


        {
          // Footer Area Start
        }
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

        {
          // Footer Area End
        }
			</>
		);
    }
}

export default App