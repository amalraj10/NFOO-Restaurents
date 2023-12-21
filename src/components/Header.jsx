import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurentSlice';

function Header() {
  const dispatch =useDispatch()
  return (
    <div>
         <Navbar className="bg-body-tertiary justify-content-between">
     
     <Navbar.Brand href={'./'}>
     <h4 className='ms-5' ><i class="fa-solid fa-bacon me-2"></i>NFOO</h4>
     </Navbar.Brand>
     <Navbar.Brand>
     <InputGroup className="mb-3" onChange={(e)=>dispatch(search(e.target.value))}>
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button  variant="outline-secondary" id="button-addon2">
        <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>

     </Navbar.Brand>
 </Navbar>
    </div>
  )
}

export default Header