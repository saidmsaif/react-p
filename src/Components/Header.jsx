import React, { Component } from 'react'
import {newsCategory} from '../News'

class Header extends Component {

  handleChange() {
    // TODO: Implement Later 
  }
  handleKeyPress() {
    // TODO: Implement Later
  }

  render() {
    const { category, changeCategory } = this.props

    return (
      <div className="my-4">
        <h1 className="mb-3">Block Buster Headlines</h1>
        <input type="search" className="form-control" placeholder="Type anything to search" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <div className="my-4">
          {newsCategory && Object.keys(newsCategory).map(item => {
            if(category === newsCategory[item]) {
              return <button 
              type="button" 
              className="btn btn-sm btn-warning mr-2 mb-3" 
              onClick={() => {
                changeCategory(newsCategory[item]);
              }}>
                {`#${newsCategory[item]}`}
                </button>
            } else {
              return <button type="button" className="btn btn-sm btn-light mr-2 mb-3" onClick={() => {
                changeCategory(newsCategory[item]);
              }}>{`#${newsCategory[item]}`}</button>
            }
          })}
        </div>
      </div>
    )
  }
}

export default Header
