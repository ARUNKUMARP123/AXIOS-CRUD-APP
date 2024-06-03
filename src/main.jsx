import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
