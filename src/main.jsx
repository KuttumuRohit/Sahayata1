import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import DonationForm from './components/DonationForm/DonationForm.jsx';
import FeedbackForm from './components/FeedbackForm/FeedbackForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />

      {/* New Routes */}
      <Route path='donate' element={<DonationForm />} />
      <Route path='feedback' element={<FeedbackForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
