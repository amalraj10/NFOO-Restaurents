import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestCard({restaurants}) {
  return (
    
    <div> <Link style={{textDecoration:'none'}} to={`/restaurentview/${restaurants.id}`}><Card className='card shadow' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={restaurants.photograph} />
    <Card.Body>
      <Card.Title ><center>{restaurants.name}</center></Card.Title>
      <hr />
      
      <Card.Text className='d-flex justify-content-between'>
       <p> {restaurants.neighborhood} </p>
       <p> cuisine : {restaurants.cuisine_type}</p>
      </Card.Text>
      
      
       
      
    </Card.Body>
  </Card></Link></div>
  )
}

export default RestCard