import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrestaurant } from '../redux/restaurentSlice';

function RestView() {


  const allrestaurent = useSelector((state)=>state.restaurentSlice.allrestaurant)
  console.log(allrestaurent);

  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchrestaurant())},[])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const param =useParams()
    console.log(param.id);
    const allrestaurant = useSelector((state)=>state.restaurentSlice.allrestaurant)
  console.log(allrestaurant);

  const  items = allrestaurant.find(item=>item.id==param.id)
  console.log(items);
  return (
    <div><Row>
       <Col md={1}></Col>
        <Col md={3} sm={12}>
          
        <img  style={{width:'100%',height:'400px'}}  src={items?.photograph} alt="" />
      
        
        </Col>
        <Col md={8} sm={12}>
            <hr />
            <h3 className='text-center'>RESTAURANT <span className='text-warning'>DETAILS</span></h3>
            <hr />
        <ListGroup>
        <ListGroup.Item className='text-center p-3' style={{fontSize:'25px',fontWeight:'15px'}}>{items?.name}</ListGroup.Item>    
      <ListGroup.Item>NeighbourHood:{items?.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine_Type:{items?.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address: {items?.address}</ListGroup.Item>
      <ListGroup.Item><div className='text-center'> 
        
        <button onClick={handleShow} className='btn btn-warning m-3'> Opearating Hours</button>
       
       <RestReview reviews={items?.reviews}/>
       
       </div></ListGroup.Item>
      

    </ListGroup>
  
      
        
        </Col>
        
        
        </Row>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Operating Hour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        <ListGroup.Item>Monday :{items?.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday : {items?.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday : {items?.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday : {items?.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday : {items?.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday :{items?.operating_hours.Saturday}</ListGroup.Item>

        </ListGroup>
        </Modal.Body>
       
      </Modal></div>
  )
}

export default RestView