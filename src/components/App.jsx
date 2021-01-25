import React, { Component } from 'react'
import id from './App.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Form from './Forms/Form'

class App extends Component {
    render() {
        return <>
            <div className="jumbotron jumbotron-fluid text-light text-center" id={id.Jumbo_BG}>
                <h1
                    className='display-4 d-inline'
                    id={id.pageHeading}
                >
                    Working with React Form
                </h1>
                <p className='w-50 mx-auto mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit, dolore earum numquam labore exercitationem excepturi. Magnam commodi quos mollitia reiciendis tempora? Doloribus, tempore nam. Ipsum magnam cum id dolorum?
                </p>
            </div>

            <Container>
                <Row>
                    <Col className='border p-5'>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default App