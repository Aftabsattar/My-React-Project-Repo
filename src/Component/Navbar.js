import React from 'react'
import logo from '../logoimg/logo1.png'
import { Container } from 'react-bootstrap';
function Navbar() {
  return (
    <>
    <Container>
   <img src={logo} alt="to-do logo" style={{height:"15%",width:'25%', borderRadius:"1000px"}}/>
    </Container>
    </>
  );
}

export default Navbar