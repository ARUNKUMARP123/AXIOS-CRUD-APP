import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';

const EditUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      toast.error('Error fetching user');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response= await api.put(`/users/${id}`, user);
     console.log(response)
      toast.success('User updated successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error updating user');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Edit User</Typography>
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
            <Button type="submit" color="primary" variant="contained">Update</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditUser;
