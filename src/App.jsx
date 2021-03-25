import React, { Component } from 'react'
import classes from "./App.module.css";
import { Col, Container, Row } from 'react-bootstrap'
import Blog from './components/blog/blog'
import { newsCategory } from './news'
import NewsLink from './components/blog/NewsList'
import Pagination from './components/blog/Pagination';

const fakeNews = [
  {
    title: 'This is title one',
    featuredImage: '',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    link: 'https://www.mylink.com',
    linkToImage: 'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
    publishedTime: 'Published at - Time : Date',
    source: {
      name: 'CNN'
    }
  },
  {
    title: 'This is title two',
    featuredImage: '',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    link: 'https://www.mylink.com',
    linkToImage: 'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
    publishedTime: 'Published at - Time : Date',
    source: {
      name: 'BBC'
    }
  },
  {
    title: 'This is title two',
    featuredImage: '',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    link: 'https://www.mylink.com',
    linkToImage: 'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
    publishedTime: 'Published at - Time : Date',
    source: {
      name: 'BBC'
    }
  }
]

class App extends Component {

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
        <Container>
            <Row className='border mt-3'>
              <NewsLink news={fakeNews}/>
            </Row>
        </Container>

        <Container>
        <Row className='border mt-3'>
              <Pagination></Pagination>
            </Row>
        </Container>
				
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