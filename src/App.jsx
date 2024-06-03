import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container>
      <h1>CRUD App with Axios and React</h1>
      <Outlet />
    </Container>
  );
};

export default App;
