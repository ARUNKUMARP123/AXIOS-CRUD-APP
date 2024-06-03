import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const response= await api.post('/posts', user);
  console.log(response)
  if(response.data){
    toast.success('User created successfully');
    navigate('/');
  }
    } catch (error) {
      toast.error('Error creating user');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Create New User</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Website"
              name="website"
              value={user.website}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">Create</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateUser;
