import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { fetchrestaurant } from '../redux/restaurentSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  //accessing the state
  const allrestaurent = useSelector((state)=>state.restaurentSlice.allrestaurant)
  console.log(allrestaurent);

  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchrestaurant())},[])
  return (
    <div><Row>
       {allrestaurent.length>0?allrestaurent.map((restaurants)=>( <Col className='px-5 py-3' sm={6} md={3} >
        <RestCard restaurants={restaurants}/>
        </Col>)):
        <p className='text-danger fs-4'>Nothing to dispaly</p>
        }
        
        </Row></div>
  )
}

export default Home