import React, {Component} from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import {newsCategory} from '../News/index'

class App extends Component {
  state = {
    category: newsCategory.technology
  }

  changeCategory = (category) => {
    this.setState({category})
  }

  render() {
    return <>
      <Container>
        <Row>
          <Col md={8} className="md-offset-3">
            <Header category={this.state.category} changeCategory={this.changeCategory}/>
          </Col>
        </Row>
      </Container>
    </>
  }
}

export default App