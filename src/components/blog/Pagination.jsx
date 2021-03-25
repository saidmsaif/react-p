import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class Pagination extends Component {
  state = {
    isEditable: false,
  }

  render() {
    return (
      <>
        <Col className='d-flex align-items-center my-2'>
          <button className='btn btn-warning'>Previous</button>
          <div className='flex-grow-1 text-center'>
            {this.state.isEditable ? (
              <input type="text" value='1'/>
            ) : (
              <p style={{userSelect: 'none', lineHeight: '1.1'}} onDoubleClick={() => {
                this.setState({isEditable: true});
              }}>
                Published At : 12 January, 2021
              </p>
            )}
          </div>
          <button className='btn btn-warning ml-auto'>Next</button>
        </Col>
      </>
    )
  }
}

export default Pagination
