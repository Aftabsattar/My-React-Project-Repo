// import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import  Navbar from './Component/Navbar';
import Todo from './Component/Todo';
function App() {
  return (
    <StrictMode>
    <Navbar></Navbar>
    <Todo></Todo>
   </StrictMode>  
  );
}

export default App;
