import React from "react";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Addfiled from "./Addfiled";
function Todo() {
  return (
    <>
      <Container className="bgcolor pb-25 h-auto col-6 rounded bg-black shadow">
        <Row className="text ">
          <Col>
            <div className="font-weight-bold">
             <h2><i className="fas fa-check-circle rounded-circle shadow gap-5"></i>To-Do-List</h2>
            </div>
          </Col>
        </Row>
        <Addfiled></Addfiled>
      </Container>
    </>
  );
}

export default Todo;
{
  /* <i className="fas fa-trash"></i>  */
}
