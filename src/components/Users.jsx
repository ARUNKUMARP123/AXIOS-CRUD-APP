import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      toast.error("Error fetching users");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Users List</Typography>
        <Link to="/create">
          <Button color="success" variant="contained">
            <AddCircleOutlineIcon />
            <Typography textTransform="capitalize" marginLeft={1}>
              Create New User
            </Typography>
          </Button>
        </Link>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Link to={`/edit/${user.id}`}>
                        <Button color="warning" variant="contained">
                          Edit
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Users;
