import React from 'react'
import { Col } from 'react-bootstrap'

const NewsItem = ({item}) => (
  
  <Col xs={4}>
      <div className='card m-2'>
        {item.linkToImage && (
          <img 
            className='card-img-top' 
            src={item.linkToImage} 
            alt={item.title} 
            title={item.title}
          />
        )}

        {item.title && (
          <h3 className='m-2'>{item.title}</h3>
        )}

        {item.content && (
          <p className='ml-2 mb-0'>
            {item.content}
            <hr />
          </p>
        )}

        {item.link && (
          <button className='btn btn-primary d-block mx-2 mb-3'>
            Read More
          </button>
        )}
        
      </div>
      </Col>
)

function NewsLink({news}) {
  return (
    <>
      {news && news.length === 0 && <h3>There are no post available</h3>}
      {news && news.map(item => <NewsItem keys={item.title} item={item} />)}
    </>
  )
}

export default NewsLink
