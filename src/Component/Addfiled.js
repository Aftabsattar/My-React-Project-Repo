import React, { useRef, useState } from "react";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import NewComp from "./NewComp";

const Addfiled = () => {
  ///============ states
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const inputRef = useRef();

  //////========== functions
  const addTask = () => {
    const inPuttext = inputRef.current.value.trim();
    if (inPuttext) {
      setTasks([...tasks, inPuttext]); // Add new task to the array
      inputRef.current.value = ""; // Clear input
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((a,i) => i!== index);
    setTasks(updatedTasks); // Update tasks without the deleted one
  };

  return (
    <Container className="my-4 h-auto justify-content-center align-item-center">
      <Row className="w-100 d-flex">
        {/* Input Field */}
        <Col>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Task"
            className="bg-transparent rounded-pill border-0 input outline-none form-control shadow bgcolori p-2 w-100"
          />
        </Col>

        {/* Add Button */}
        <Col xs="auto">
          <button onClick={addTask} className="btna p-2 rounded-pill shadow">
            Add +
          </button>
        </Col>
      </Row>

      {/* Pass tasks and deleteTask to NewComp */}
      <NewComp tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
};

export default Addfiled;
