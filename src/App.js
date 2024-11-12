import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content';
function App() {
  return (
    <StrictMode>
      <Navbar></Navbar>
      <Content></Content>
    </StrictMode>
  );
}

export default App;
