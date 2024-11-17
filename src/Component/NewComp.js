import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const NewComp = ({ tasks, deleteTask }) => {
  return (
    <Container className="my-4">
      {tasks.map((task, index) => (
        <Row
          key={index}
          className="w-100 align-items-center justify-content-center rounded g-3 bg-transparent my-2"
        >
          {/* Check Icon */}
          <Col xs="auto" className="d-flex">
            <i className="fas fa-check-circle text fs-3"></i>
          </Col>

          {/* Task Text */}
          <Col>
            <input
              type="text"
              value={task}
              readOnly
              className="form-control border-0 bgcolori rounded-pill text-dark outline-none p-2 shadow-none"
            />
          </Col>

          {/* Trash Icon */}
          <Col xs="auto" className="d-flex justify-content-center">
            <i
              className="fas fa-trash icon fs-3"
              style={{ cursor: "pointer" }}
              onClick={() => deleteTask(index)}
            ></i>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default NewComp;
