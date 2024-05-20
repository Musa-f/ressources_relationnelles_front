import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import Homepage from './pages/Homepage.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

function App() {
  return (
    <>
    <Routes>        
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App;
