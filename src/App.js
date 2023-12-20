import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import  Register  from './pages/Register';
import Login from './pages/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        {/* <Route path = "/cart" element = {<Cart />} /> */}
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
