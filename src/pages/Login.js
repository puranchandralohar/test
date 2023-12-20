import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://merd-api.merakilearn.org/hackathon20December/LOGIN', formData)
    .then(res => {
        console.log(res.data);
        // LoginUser();
    })
    .catch(err => console.log(err));




    toast.success('Login successful!', {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Reset the form after successful login
    setFormData({ email: '', password: '' });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Login</FormHeading>
        <FormGroup>
          <Label htmlFor="email">
            Email:
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            Password:
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
      <NewUserLink>
        New user? <Link to="/register">Register here</Link>
      </NewUserLink>
      <ToastContainer />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

const NewUserLink = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
`;

export default Login;
