import React from "react";
import Image from "./Image";
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
function Content() {
  return (
    <>
      <Container
        className="d-flex align-items-center bg-white"
        style={{ height: "80vh" }}
      >
        <Row className="w-100 justify-content-between">
          <Col md={5} style={{ marginTop: "4rem" }} >
            <h1 className="">Your Feet Deserve The Best</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              voluptas, placeat animi consectetur velit optio quidem nemo ut aut
              iste. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia consequuntur ad illo eos doloremque labore eveniet,
              voluptatum facilis laudantium odit numquam veritatis cupiditate
              nisi expedita explicabo ipsum sapiente pariatur earum!
            </p>
            <div>
            <Button variant="danger" className="me-2">Shop Now</Button>
            <Button style={{border:"2px solid "}} className="text-danger bg-white">Category</Button>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <Image />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Content;
