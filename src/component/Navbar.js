import React from "react";
import img from "../Image/Ndure.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
function Navbar() {
  return (
    <>
    <Container className="" >
      <nav className="d-flex justify-content-between align-items-center bg-white ">
        <img src={img} alt="Nikelogo" style={{ width: "15%", height: "15%", margin:"0.5rem" ,borderRadius:"80%"}}/>
        <ul className="d-flex list-unstyled gap-5 fw-bold fs-5  mt-4">
          <li href="#">Home</li>
          <li href="#">About Us</li>
          <li href="#">Services</li>
          <li href="#">My Project</li>
        </ul>

        <Button className="bg-danger border border-danger fs-5 text-white mt-3 p-2" style={{width:"8%",borderRadius:"8%"}}>Sign In</Button>
      </nav>
    </Container>
    </>
  );
}

export default Navbar;
